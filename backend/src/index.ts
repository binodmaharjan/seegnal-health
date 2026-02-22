import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/database";
import authRoutes from "./modules/auth/auth.routes";
import drugRoutes from "./modules/drugs/drug.routes";
import ruleRoutes from "./modules/drugs-interaction/rule.routes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.HOST_URL || "http://localhost:5173",
  }),
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/drugs", drugRoutes);
app.use("/api/analyze", ruleRoutes);

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    await sequelize.sync({ alter: true });
    console.log("Database synchronized.");

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

startServer();
