import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import PostRoute from "./src/routes/Post.js";
import UserRoute from "./src/routes/User.js";
import HomeController from "./src/controllers/homeController.js";
import fs from "fs";

dotenv.config();

const app = express();

const router = express.Router();

router.get("/", HomeController.renderHomePage);

app.use(cors());
app.use(express.json());
app.use(PostRoute);
app.use(UserRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is RUNNING on PORT : ", process.env.PORT);
});
