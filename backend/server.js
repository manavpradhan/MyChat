import { app, server } from "./socket/socket.js";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import databaseConnection from "./utils/connectToDb.js";
import authRoutes from "./routes/auth.js";
import msgRoutes from "./routes/messages.js";
import userRoutes from "./routes/users.js";

const __dirname = path.resolve();

//ENV VARIABLE setup
dotenv.config();
const port = process.env.PORT || 5000;

//Middlewares
app.use(cors());
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); // to parse the cokkies we will create

app.use("/api/auth", authRoutes);
app.use("/api/messages", msgRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
});

server.listen(port, () => {
  databaseConnection();
  console.log(`server is running at port : ${port}`);
});
