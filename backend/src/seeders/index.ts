import "reflect-metadata";
import dotenv from "dotenv";
import sequelize from "../config/database";
import { User } from "../models/User";
import { Drug } from "../models";
import { Rule } from "../models/Rule";

dotenv.config();
const usersData = [
  {
    name: "Yura Zharkovsky",
    email: "yura.zharkovsky@seegnal.com",
    password: "Abcd1234!",
  },
];

const drugsData = [
  {
    name: "Sitagliptin",
    strength: "50 mg",
  },
  {
    name: "Metformin",
    strength: "850 mg",
  },
  {
    name: "Apixaban ",
    strength: "5 mg",
  },
  {
    name: "Acalabrutinib ",
    strength: "100 mg",
  },
  {
    name: "Pantoprazole ",
    strength: "20 mg",
  },
  {
    name: "Amlodipine",
    strength: "5 mg",
  },
  {
    name: "Simvastatin",
    strength: "40 mg",
  },
];

const rulesData = [
  {
    combination: [6, 7],
    severity: "MAJOR",
    color: "red",
    alert: "Risk of Myopathy",
  },
  {
    combination: [3, 4],
    severity: "MAJOR",
    color: "red",
    alert: "Increased Bleeding Risk",
  },
  {
    combination: [5],
    severity: "NONE",
    color: "",
    alert: "",
  },
];

const seedDatabase = async () => {
  try {
    // Connect to database
    await sequelize.authenticate();
    console.log("Database connection established.");

    // Sync models
    await sequelize.sync({ force: true });
    console.log("Database synchronized (tables created/reset).");

    // Seed users
    const users = await User.bulkCreate(usersData, { individualHooks: true });

    console.log(`Successfully seeded ${users.length} users:`);
    users.forEach((user) => {
      console.log(`   - ${user.email}`);
    });

    // Seed drugs
    const drugs = await Drug.bulkCreate(drugsData, { individualHooks: true });

    console.log(`Successfully seeded ${drugs.length} drugs:`);
    drugs.forEach((drug) => {
      console.log(`   - ${drug.name}`);
    });

    // Seed rules
    const rules = await Rule.bulkCreate(rulesData, { individualHooks: true });

    console.log(`Successfully seeded ${rules.length} rules:`);
    rules.forEach((rule) => {
      console.log(`   - ${rule.combination}`);
    });

    console.log("\n✅ Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
