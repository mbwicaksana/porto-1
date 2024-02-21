import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import PostRoute from "./src/routes/Post.js";
import UserRoute from "./src/routes/User.js";
import CommentRoute from "./src/routes/Comment.js";
import favicon from "express-favicon";

dotenv.config();

const app = express();

app.use(favicon("favicon.ico"));

app.get("/", (req, res) => {
  res.send("Hey Express !");
});

app.use(cors());
app.use(express.json());
app.use(PostRoute);
app.use(UserRoute);
app.use(CommentRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is RUNNING on PORT : ", process.env.PORT);
});
