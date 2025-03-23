import * as express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  updateBlog,
} from "../controllers/blog.controller";
import { verifyAdmin } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", getAllBlogs); // Public: View blogs
router.post("/", verifyAdmin as express.RequestHandler, createBlog); // Admin: Create blog
router.put(
  "/:id",
  verifyAdmin as express.RequestHandler,
  updateBlog as express.RequestHandler
); // Admin: Update blog
router.delete(
  "/:id",
  verifyAdmin as express.RequestHandler,
  deleteBlog as express.RequestHandler
); // Admin: Delete blog

//! For GET and POST, the overloads accept asynchronous functions returning Promises without issues. However, the PUT and DELETE overloads enforce a stricter signature and expect a function that directly conforms to RequestHandler. Since asynchronous functions return a Promise, TypeScript flags a type mismatch for updateBlog and deleteBlog unless you explicitly cast them. This discrepancy in overloads is why only those two functions threw the error.

export default router;
