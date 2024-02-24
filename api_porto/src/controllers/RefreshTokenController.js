import { prisma } from "../config/prisma-client.js";
import jwt from "jsonwebtoken";

export const refreshTokenController = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    const user = await prisma.user.findMany({
      where: { refreshToken: refreshToken },
    });

    if (!user) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (error, decoded) => {
      if (error) return res.sendStatus(403);
      const userId = user.id;
      const name = user.name;
      const email = user.email;
      const accessToken = jwt.sign(
        { userId, name, email },
        process.env.ACCESS_TOKEN,
        {
          expiresIn: "15s",
        }
      );
      res.json({ accessToken: accessToken });
    });
  } catch (error) {
    console.log(error);
  }
};
