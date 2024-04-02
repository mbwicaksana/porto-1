/*
Functions to manage user authentication, including user creation, retrieval, update, and deletion, as well as session creation, deletion, and retrieval.

Dependencies:
- prisma: Prisma client for database operations
- bcrypt: Library for hashing passwords
- jwt: Library for generating JSON Web Tokens

Usage:
- These functions should be used as controllers in an Express.js application to handle user authentication and authorization.

@param {Object} req - The request object.
@param {Object} res - The response object.
*/

import { prisma } from "../config/prisma-client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Function to create a new user
export const createUser = async (req, res) => {
  try {
    // Extract user details from request body
    const { email, name, role, password, confirmPassword } = req.body;

    // Validate required fields
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Validate password format
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit number",
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

// Function to retrieve all users
export const getUsers = async (req, res) => {
  try {
    // Check if refresh token is present in cookies
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

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

// Function to retrieve a user by ID
export const getUserById = async (req, res) => {
  try {
    // Check if refresh token is present in cookies
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    // Parse user ID from request parameters
    const userId = parseInt(req.params.id, 10);

    // Validate user ID
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

// Function to update a user
export const updateUser = async (req, res) => {
  try {
    // Check if refresh token is present in cookies
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Parse user ID from request parameters
    const userId = parseInt(req.params.id, 10);

    // Validate user ID
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

// Function to delete a user
export const deleteUser = async (req, res) => {
  try {
    // Check if refresh token is present in cookies
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Parse user ID from request parameters
    const userId = parseInt(req.params.id, 10);

    // Validate user ID
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

// Function to create a new session (login)
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
    const { id, name, email: userEmail, role } = user;

    // Generate access token
    const accessToken = jwt.sign(
      { userId: id, name, email: userEmail, role },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "20s",
      },
    );

    // Generate refresh token
    const refreshToken = jwt.sign(
      { userId: id, name, email: userEmail, role },
      process.env.REFRESH_TOKEN,
      {
        expiresIn: "1d",
      },
    );

    // Store both tokens in the database
    await prisma.user.update({
      where: { id },
      data: {
        refreshToken: refreshToken, // Store refresh token in the database
        accessToken: accessToken, // Store access token in the database
      },
    });

    // Set refresh token in cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60,
    });

    // Respond with access token
    res.json({ accessToken, role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// Function to delete a session (logout)
export const deleteSession = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken; // Get refresh token from cookie

    if (!refreshToken) return res.sendStatus(204);

    const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
    const userId = decodedToken.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) return res.sendStatus(204);

    // Clear both access and refresh tokens from the database
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        accessToken: null,
        refreshToken: null,
      },
    });

    res
      .clearCookie("refreshToken")
      .status(200)
      .json({ message: "You've been logged out" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// Function to retrieve current session
export const getCurrentSession = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken; // Get refresh token from cookie

    if (!refreshToken) {
      return res.status(401).json({ message: "Token tidak ditemukan" });
    }

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
