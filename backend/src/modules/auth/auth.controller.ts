import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  constructor(private authService: AuthService) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const errors: Record<string, string> = {};

    try {
      if (!email || !password) {
        errors.email = "Invalid username and password";
        throw errors;
      }
      const result = await this.authService.login(email, password);
      res.json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        error: error,
      });
    }
  };
}
