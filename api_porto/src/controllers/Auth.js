import { prisma } from "../config/prisma-client.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables for JWT secret

export const createSession = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, role: true, password: true },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await argon2.verify(user.password, password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Create and sign JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Set token expiration time
    });

    const session = await prisma.session.create({
      data: {
        userId: user.id,
        hashedSession: await generateHashedSession(user.id), // Optional: Hash session ID
        expiresAt: new Date(Date.now() + 3600000), // Optional: Set session expiration
      },
    });

    res.json({
      user: { id: user.id, email: user.email, role: user.role },
      session: { id: session.id, expiresAt: session.expiresAt },
      token, // Include the JWT token in the response
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteSession = async (req, res) => {
  const sessionId = req.headers.authorization?.split(" ")[1]; // Validate token format

  if (!sessionId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify token before deleting session
    const decoded = jwt.verify(sessionId, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    await prisma.session.delete({
      where: { id: sessionId },
    });

    res.json({ message: "Session deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getCurrentSession = async (req, res) => {
  const sessionId = req.headers.authorization?.split(" ")[1]; // Validate token format

  if (!sessionId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify token before retrieving session
    const decoded = jwt.verify(sessionId, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const session = await prisma.session.findUnique({
      where: { id: sessionId },
      select: { userId: true, expiresAt: true }, // Only fetch relevant fields
    });

    if (!session) {
      return res.status(401).json({ message: "Invalid session" });
    }

    // Optionally check session expiration and refresh if needed
    if (session.expiresAt < Date.now()) {
      // Implement token refresh logic here
    }

    res.json({
      user: { id: decoded.userId }, // Use decoded user ID
      session,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
