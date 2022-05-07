import { ZodError } from "zod";
import { Request, Response } from "express";

function errorHandler(err: any, req: Request, res: Response) {
  const statusCode = res.statusCode || 500;
  res.status(statusCode);

  if (err instanceof ZodError) {
    return res.status(400).json(err.issues);
  }
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
}
export default errorHandler;
