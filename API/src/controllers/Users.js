import { prisma } from "../config/prisma-client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * Controller function to fetch all users along with their posts and comments.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getUsers = async (req, res) => {
  try {
    // Fetch users with their associated posts and comments
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

    // Respond with the fetched users
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

/**
 * Controller function to fetch a user by their ID.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getUserById = async (req, res) => {
  try {
    // Parse user ID from request parameters
    const userId = parseInt(req.params.id, 10);

    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // Fetch user by ID with associated posts and comments
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

    // If user not found, return 404
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with the fetched user
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching user" });
  }
};

/**
 * Controller function to create a new user.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const createUser = async (req, res) => {
  try {
    // Extract user details from request body
    const { email, name, role, password, confirmPassword } = req.body;

    // Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Validate password format
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        role,
        password: hashedPassword,
      },
    });

    // Respond with success message and user details
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

    // Handle duplicate email errors
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Email already exists" });
    }

    res.status(500).json({ message: "Error creating user" });
  }
};

/**
 * Controller function to update an existing user.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const updateUser = async (req, res) => {
  try {
    // Parse user ID from request parameters
    const userId = parseInt(req.params.id, 10);

    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // Fetch the user to be updated
    const user = await prisma.user.findUnique({ where: { id: userId } });

    // If user not found, return 404
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Prepare update data based on request body
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

    // Update the user
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    // Respond with success message and updated user details
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);

    // Handle duplicate email errors
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Email already exists" });
    }

    res.status(500).json({ message: "Error updating user" });
  }
};

/**
 * Controller function to delete a user.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const deleteUser = async (req, res) => {
  try {
    // Parse user ID from request parameters
    const userId = parseInt(req.params.id, 10);

    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // Fetch the user to be deleted
    const user = await prisma.user.findUnique({ where: { id: userId } });

    // If user not found, return 404
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Use transaction to ensure all operations succeed or fail together
    await prisma.$transaction(async () => {
      await prisma.comment.deleteMany({ where: { authorId: userId } });
      await prisma.post.deleteMany({ where: { authorId: userId } });
      await prisma.user.delete({ where: { id: userId } });
    });

    // Respond with success message
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting user" });
  }
};

/**
 * Controller function to create a user session.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const createSession = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // If user not found, return 404
    if (!user) {
      return res.status(404).json({ message: "Email tidak ditemukan" });
    }

    // Check if password matches
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    // If password doesn't match, return 400
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Password salah" });
    }

    // Extract user details
    const { id, name, email: userEmail } = user;

    // Generate access token
    const accessToken = jwt.sign(
      { userId: id, name, email: userEmail },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "20s",
      }
    );

    // Generate refresh token
    const refreshToken = jwt.sign(
      { userId: id, name, email: userEmail },
      process.env.REFRESH_TOKEN,
      {
        expiresIn: "1d",
      }
    );

    // Update user's refresh token in database
    await prisma.user.update({
      where: { id },
      data: {
        refreshToken: refreshToken,
      },
    });

    // Set refresh token in cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Respond with access token
    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

/**
 * Controller function to delete a user session.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const deleteSession = async (req, res) => {
  try {
    const refreshToken = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
    const userId = decodedToken.userId;

    if (!refreshToken) return res.sendStatus(204);

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) return res.sendStatus(204);

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshToken: null,
      },
    });
    res
      .clearCookie("refreshToken")
      .status(200)
      .json({ message: "You've been logout" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

/**
 * Controller function to get current user session.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getCurrentSession = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
    const userId = decodedToken.userId;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Token tidak valid atau kadaluarsa" });
  }
};
