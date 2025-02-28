import express from "express";
import path from "path";
import { dirname } from "path";

const __dirname = path.resolve(path.dirname(""));
const app = express();

app.get("/", (req, res) => {
  res.sendFile("pages/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("pages/about.html", { root: __dirname });
});
app.get("/contact-me", (req, res) => {
  res.sendFile("pages/contact-me.html", { root: __dirname });
});
app.get("*", (req, res) => {
  res.sendFile("pages/404.html", { root: __dirname });
});

app.listen(3000);
