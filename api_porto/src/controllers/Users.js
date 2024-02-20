import { prisma } from "../config/prisma-client.js";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: true,
        posts: {
          select: {
            id: true,
            title: true,
            createdAt: true,
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
      include: {
        profile: true,
        posts: {
          select: {
            id: true,
            title: true,
            createdAt: true,
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
    const { email, name, bio, role } = req.body;

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        role,
        profile: {
          create: { bio }, // Create profile if necessary
        },
      },
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
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

    // Check if user has a profile (using `include` for efficiency)
    const userWithProfile = await prisma.user.findUnique({
      where: { id: userId },
      include: { profile: true },
    });

    if (userWithProfile.profile) {
      // Delete the profile only if it exists
      await prisma.profile.delete({
        where: { id: userWithProfile.profile.id },
      });
    }

    // Now delete the user
    await prisma.user.delete({ where: { id: userId } });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting user" });
  }
};
