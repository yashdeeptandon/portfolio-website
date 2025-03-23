import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/response";
import { logError } from "../utils/logger";

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logError("Unhandled error occurred", err);
  res
    .status(err.status || 500)
    .json(errorResponse("Something went wrong", err.message));
};
