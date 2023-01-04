//* Create Own Server
const http = require("http");

const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;

const server = http.createServer((req, res) => {
  res.status = 200;
  res.setHeader("Content-Type", "text/css");
  res.write("Hello, ");
  res.write("World!");
  res.end(responseBody);
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log("Server listenting on port", PORT);
});
