const http = require("http");

http.createServer(req, res, () => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (url.includes("/rickandmorty/character")) {
    const id = url.split("/").pop();
  }
});
