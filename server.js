const hostname = "127.0.0.1";
const port = 3000;

const server = require("./route.js");

server.listen(port, hostname, () => {
  console.log(`The server is running at http://${hostname}:${port}`);
});


