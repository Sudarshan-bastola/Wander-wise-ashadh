import express from "express";

import cors from 'cors';

import connectDB from "./config/database.js";

import HANDLERS from "./handlers/index.js";

import errorMiddleware from "./middlewares/error.js";

import { authMiddleware } from "./middlewares/auth.js";

const app = express();

const PORT = process.env.PORT;

connectDB();

app.use(cors({
  origin: process.env.FRONTEND_URL, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  
}));

app.use(express.json());
app.use(authMiddleware);
app.use("/", HANDLERS);
app.use(errorMiddleware);
// app.get("/", (req, res) => {

//     res.send("Hello World");
// });

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
