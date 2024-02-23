import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.REFRESH_TOKEN, (error, decoded) => {
    if (error) return res.status(403).json({ message: error });
    req.email = decoded.email;
    next();
  });
};
