import { prisma } from "../config/prisma-client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const AuthMiddleware = async (req, res, next) => {};
