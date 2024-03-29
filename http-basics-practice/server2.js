//* Create Own Server
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parse the body of the request as JSON if Content-Type header is application/json
    if (reqBody) {
      if (req.headers["content-type"] == "application/json") {
        req.body = JSON.parse(reqBody);
      }
      // Parsing the body of the request
      if (req.headers["content-type"] == "application/x-www-form-urlencoded") {
        req.body = reqBody
          .split("&")
          .map((keyValuePair) => keyValuePair.split("="))
          .map(([key, value]) => [key, value.replace(/\+/g, " ")])
          .map(([key, value]) => [key, decodeURIComponent(value)])
          .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {});
      }
      console.log(req.body);
    }

    const resBody = {
      Hello: "World!",
    };
    // Return the `resBody` object as JSON in the body of the response
    return res.end(JSON.stringify(resBody));
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
