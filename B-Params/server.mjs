///Calculadora con Body Params

import { createServer } from "node:http";

const server = createServer((req, res) => {

  // CORS
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/suma") {

    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {

      const datos = JSON.parse(body);

      const num1 = Number(datos.num1);
      const num2 = Number(datos.num2);

      const resultado = num1 + num2;

      res.writeHead(200, { "Content-Type": "application/json" });

      res.end(JSON.stringify({
        resultado: resultado
      }));

    });

  }

});

server.listen(process.env.PORT || 3001, () => {
  console.log("Servidor BODY PARAMS en puerto 3001");
});
