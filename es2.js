const http = require("http");
const url = require("url");
const host = "0.0.0.0";
const port = "8080";
const pagehttp = function (req, response) {
  console.log("metodo" + req.method);
  console.log("path:" + req.url);
  url_parts = url.parse(req.url, true);
  console.log(url_parts);
  query = url_parts.query;
  console.log(query);

  const fs = require("fs");

  const file1 = fs.readFileSync("file1.html", "utf8");
  const file2 = fs.readFileSync("file2.html", "utf8");
  const file3 = fs.readFileSync("file3.html", "utf8");

  if (url_parts.query.q == "file1") {
    response.writeHead(200);
    response.end(file1);
  } else if (url_parts.query.q == "file2") {
    response.writeHead(200);
    response.end(file2);
  } else {
    response.writeHead(200);
    response.end(file3);
  }
};

const server = http.createServer(pagehttp);
server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
});
