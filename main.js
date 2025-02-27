import http from "node:http";
import fs from "node:fs/promises";

const server = http.createServer(async (req, res) => {
  let data = "";

  if (req.url === "/") {
    try {
      data = await fs.readFile("pages/index.html", { encoding: "utf-8" });
    } catch (error) {
      console.error(error);
    }
  } else if (req.url === "/about") {
    try {
      data = await fs.readFile("pages/about.html", { encoding: "utf-8" });
    } catch (error) {
      console.error(error);
    }
  } else if (req.url === "/contact-me") {
    try {
      data = await fs.readFile("pages/contact-me.html", { encoding: "utf-8" });
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      data = await fs.readFile("pages/404.html", { encoding: "utf-8" });
    } catch (error) {
      console.error(error);
    }
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data)
});

server.listen(8080);
