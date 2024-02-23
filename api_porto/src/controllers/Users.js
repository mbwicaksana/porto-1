import { prisma } from "../config/prisma-client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        password: false,
        posts: {
          select: {
            id: true,
            title: true,
            createdAt: true,
          },
        },
        comments: {
          select: {
            postId: true,
            name: true,
            email: true,
            body: true,
          },
        },
      },
    });

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10); // Handle invalid IDs gracefully

    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        password: false,
        posts: {
          select: {
            id: true,
            title: true,
            createdAt: true,
          },
        },
        comments: {
          select: {
            postId: true,
            name: true,
            email: true,
            body: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching user" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, name, role, password, confirmPassword } = req.body;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Validate password fo rmat
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit",
      });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        role,
        password: hashedPassword,
      },
    });

    const user = await prisma.user.findUnique({
      where: { id: newUser.id },
      select: {
        name: true,
        email: true,
      },
    });

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);

    if (error.code === "P2002") {
      // Handle duplicate email errors
      return res.status(409).json({ message: "Email already exists" });
    }

    res.status(500).json({ message: "Error creating user" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10); // Handle invalid IDs gracefully

    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updateData = {};

    if (req.body.hasOwnProperty("email")) {
      updateData.email = req.body.email;
    }

    if (req.body.hasOwnProperty("name")) {
      updateData.name = req.body.name;
    }

    if (req.body.hasOwnProperty("role")) {
      updateData.role = req.body.role;
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);

    if (error.code === "P2002") {
      // Handle duplicate email errors
      return res.status(409).json({ message: "Email already exists" });
    }

    res.status(500).json({ message: "Error updating user" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10); // Handle invalid IDs gracefully

    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // Check if user exists (same as before)
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Use a transaction to ensure all operations succeed or fail together
    await prisma.$transaction(async () => {
      // Delete comments first to avoid foreign key constraint errors
      await prisma.comment.deleteMany({ where: { authorId: userId } });
      await prisma.post.deleteMany({ where: { authorId: userId } });
      await prisma.user.delete({ where: { id: userId } });
    });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting user" });
  }
};

export const createSession = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "Email tidak ditemukan" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Password salah" });
    }

    const { id, name, email: userEmail } = user;

    const accessToken = jwt.sign(
      { userId: id, name, email: userEmail },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "20s",
      }
    );

    const refreshToken = jwt.sign(
      { userId: id, name, email: userEmail },
      process.env.REFRESH_TOKEN,
      {
        expiresIn: "1d",
      }
    );

    await prisma.user.update({
      where: { id },
      data: {
        refreshToken: refreshToken,
      },
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

export const deleteSession = async (req, res) => {};

export const getCurrentSession = async (req, res) => {};
