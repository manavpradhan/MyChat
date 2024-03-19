import { app, server } from "./socket/socket.js";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import databaseConnection from "./utils/connectToDb.js";
import authRoutes from "./routes/auth.js";
import msgRoutes from "./routes/messages.js";
import userRoutes from "./routes/users.js";

//ENV VARIABLE setup
dotenv.config();
const port = process.env.PORT || 5000;

//Middlewares
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); // to parse the cokkies we will create

app.use("/api/auth", authRoutes);
app.use("/api/messages", msgRoutes);
app.use("/api/users", userRoutes);

server.listen(port, () => {
  databaseConnection();
  console.log(`server is running at port : ${port}`);
});
