import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { User } from "../models/User";
import { Drug } from "../models";
import { Rule } from "../models/Rule";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL || "", {
  dialect: "postgres",
  logging: false,
  models: [User, Drug, Rule],
});

export default sequelize;
