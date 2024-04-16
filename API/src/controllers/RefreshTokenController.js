import { prisma } from "../config/prisma-client.js";
import jwt from "jsonwebtoken";

export const refreshTokenController = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) return res.sendStatus(401);

    const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
    const userId = decodedToken.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    const { id, name, email: userEmail, role } = user;

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (error, decoded) => {
      if (error) {
        console.error("Error verifying refresh token:", error.message);
        return res.sendStatus(403);
      }
      const accessToken = jwt.sign(
        { userId: id, name, email: userEmail, role },
        process.env.ACCESS_TOKEN,
        {
          expiresIn: "15s",
        },
      );
      res.json({ accessToken: accessToken });
    });
  } catch (error) {
    console.log(error);
  }
};
