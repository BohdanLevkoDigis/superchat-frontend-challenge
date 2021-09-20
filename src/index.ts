import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "config";
const app = express();
const port = config.get<string>("port");
const mongoUrl = config.get<string>("mongoUrl");

async function startDbConnection() {
  await mongoose.connect(mongoUrl);
}
app.use(cors());
app.use(express.json());
app.use("/api/repoLink", require("./repoLink/repoLink.routes"));
app.use("/uploads", express.static("uploads"));

async function start() {
  try {
    await startDbConnection();
    app.listen(port, () => console.log(`App has been started on ${port}...`));
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
