import { Router } from "express";
import { authController } from "./auth.container";

const router = Router();

router.post("/login", authController.login);

export default router;
