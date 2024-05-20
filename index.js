import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3060;

app.use("/", (req, res) => {
  return res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
