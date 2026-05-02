import { Request, Response } from "express";
import { signupSchema } from "./auth.schema";
import { signupUser } from "./auth.service";

export const signup = async (req: Request, res: Response) => {
  try {
    // 1. Validate input
    const parsed = signupSchema.parse(req.body);

    // 2. Call service
    const result = await signupUser(parsed);

    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(400).json({
      message: error.message || "Signup failed",
    });
  }
};