import jwt from "jsonwebtoken";

export const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

export const generateJWT = (payload: object): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const verifyJWT = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
