import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import "./utils/db.js";
import { dbConnect } from "./utils/db.js";

dotenv.config();
const app = express();

dbConnect();

app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ limit: "10mb", extended: true }));
