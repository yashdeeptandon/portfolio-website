import express, { RequestHandler } from "express";
import { loginAdmin, registerAdmin } from "../controllers/auth.controller";

const router = express.Router();

router.post("/login", loginAdmin as RequestHandler);
// router.post('/register', registerAdmin); // You can disable this after 1-time use

export default router;
