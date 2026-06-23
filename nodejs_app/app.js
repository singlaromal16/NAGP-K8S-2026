import express from "express";
import connectDB from "./db.js";
import { User } from "./user.model.js";
import dotenv from "dotenv";
import os from "os";

dotenv.config();

const app = express();

app.use(express.json());

await connectDB();

app.get("/", (req, res)=>{
    res.type('text/plain');
    res.send(`Hello Node Microservice
    PodName: ${os.hostname()}
    ImageVersion: ${process.env.APP_IMAGE_VERSION || 'not-set'}`);
})

app.get("/users", async(req, res) =>{
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
})

app.listen(3000, ()=>{
    console.log("Server is running on 3000");
});