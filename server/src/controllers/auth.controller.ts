import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Admin } from "../models/Admin";
import { successResponse, errorResponse } from "../utils/response";
import { logInfo, logError } from "../utils/logger";

const JWT_SECRET = process.env.JWT_SECRET as string;

// ✅ Login Controller
export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json(errorResponse("Invalid email or password"));
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json(errorResponse("Invalid email or password"));
    }

    const token = jwt.sign({ adminId: admin._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    logInfo("Admin logged in");
    res.status(200).json(successResponse("Login successful", { token }));
  } catch (error) {
    logError("Login failed", error);
    res.status(500).json(errorResponse("Login failed", error));
  }
};

// ✅ Register Controller (optional, or use manually once)
export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json(errorResponse("Admin already exists"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await Admin.create({ email, password: hashedPassword });

    logInfo("Admin registered");
    res.status(201).json(successResponse("Admin registered", newAdmin));
  } catch (error) {
    logError("Registration failed", error);
    res.status(500).json(errorResponse("Registration failed", error));
  }
};
