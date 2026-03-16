//Calculadora con Query Params

import { createServer } from "node:http";
import url from "node:url";

const server = createServer((req, res) => {

 // CORS
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Methods", "GET, POST");
 res.setHeader("Access-Control-Allow-Headers", "Content-Type");

 const parsedUrl = url.parse(req.url, true);

 if (parsedUrl.pathname === "/suma" && req.method === "GET") {

  const num1 = Number(parsedUrl.query.num1);
  const num2 = Number(parsedUrl.query.num2);

  const resultado = num1 + num2;

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ resultado }));

 }

});

server.listen(3000, () => {
 console.log("Servidor Query Params en puerto 3000");
});