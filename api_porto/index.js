import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import PostRoute from "./src/routes/Post.js";
import UserRoute from "./src/routes/User.js";
import http from "http";

dotenv.config();

const app = express();
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  var message = "It works!\n",
    version = "NodeJS " + process.versions.node + "\n",
    response = [message, version].join("\n");
  res.end(response);
});

app.use(cors());
app.use(express.json());
app.use(PostRoute);
app.use(UserRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is RUNNING on PORT : ", process.env.PORT);
});
server.listen();
