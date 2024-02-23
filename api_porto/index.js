import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import favicon from "express-favicon";
import cookieParser from "cookie-parser";
import PostRoute from "./src/routes/PostRoute.js";
import UserRoute from "./src/routes/UserRoute.js";
import CommentRoute from "./src/routes/CommentRoute.js";

dotenv.config();

const app = express();

app.use(favicon("favicon.ico"));

app.get("/", (req, res) => {
  res.send("Hey Express !");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(PostRoute);
app.use(UserRoute);
app.use(CommentRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is RUNNING on PORT : ", process.env.PORT);
});
