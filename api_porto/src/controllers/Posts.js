import { prisma } from "../config/prisma-client.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true, // Include the author data in the response
      },
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching posts" });
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) }, // Ensure numeric ID
      include: {
        author: true, // Include the author data in the response
      },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching post" });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content, published, authorId } = req.body;

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId: parseInt(authorId), // Ensure numeric ID
      },
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating post" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, published } = req.body;

    const updatedPost = await prisma.post.update({
      where: { id: parseInt(id) }, // Ensure numeric ID
      data: {
        title,
        content,
        published,
      },
    });

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating post" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPost = await prisma.post.delete({
      where: { id: parseInt(id) }, // Ensure numeric ID
    });

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting post" });
  }
};
