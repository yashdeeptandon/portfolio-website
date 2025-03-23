import { Request, Response } from "express";
import { Blog } from "../models/Blog";
import { successResponse, errorResponse } from "../utils/response";
import { logInfo, logError } from "../utils/logger";

// ✅ Get all blogs
export const getAllBlogs = async (_req: Request, res: Response) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    logInfo("Fetched blogs successfully");
    res.status(200).json(successResponse("Blogs fetched successfully", blogs));
  } catch (error) {
    logError("Failed to fetch blogs", error);
    res.status(500).json(errorResponse("Failed to fetch blogs", error));
  }
};

// ✅ Create a blog
export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, tags } = req.body;
    const newBlog = await Blog.create({ title, content, tags });
    logInfo("Blog created", newBlog);
    res.status(201).json(successResponse("Blog created successfully", newBlog));
  } catch (error) {
    logError("Failed to create blog", error);
    res.status(500).json(errorResponse("Failed to create blog", error));
  }
};

// ✅ Update a blog
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!blog) {
      logError("Blog not found", req.params.id);
      return res.status(404).json(errorResponse("Blog not found"));
    }
    logInfo("Blog updated", blog);
    res.status(200).json(successResponse("Blog updated successfully", blog));
  } catch (error) {
    logError("Failed to update blog", error);
    res.status(500).json(errorResponse("Failed to update blog", error));
  }
};

// ✅ Delete a blog
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) {
      logError("Blog not found for deletion", req.params.id);
      return res.status(404).json(errorResponse("Blog not found"));
    }
    logInfo("Blog deleted", deleted);
    res.status(200).json(successResponse("Blog deleted successfully", deleted));
  } catch (error) {
    logError("Failed to delete blog", error);
    res.status(500).json(errorResponse("Failed to delete blog", error));
  }
};
