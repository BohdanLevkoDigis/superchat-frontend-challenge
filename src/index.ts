import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";
import path from "path"

dotenv.config()

const app = express();
const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

async function startDbConnection() {
  await mongoose.connect(mongoUrl);
}
app.use(cors());
app.use(express.json());
app.use("/api/repoLink", require("./repoLink/repoLink.routes"));
app.use("/uploads", express.static("uploads"));

app.use(express.static(path.resolve(__dirname, "../client/build")))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"))
})

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
