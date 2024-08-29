const fs = require("fs");
const http = require("http");
const url = require("url");

// file
const res = fs.readFileSync("./txt/input.txt", "utf-8");

const resOut = `this is ${res}`;
fs.writeFileSync("./txt/output.txt", resOut);

// asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log("data:", data);
});

//server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
// const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is overview");
  } else if (pathName === "/product") {
    res.end("This is products");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
});
