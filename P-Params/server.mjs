//Calculadora con Path Params

import { createServer } from "node:http";

const server = createServer((req, res) => {

res.setHeader("Access-Control-Allow-Origin","*");

const url = req.url.split("/");

if(url[1] === "suma"){

const num1 = Number(url[2]);
const num2 = Number(url[3]);

const resultado = num1 + num2;

res.writeHead(200,{"Content-Type":"application/json"});

res.end(JSON.stringify({
resultado: resultado
}));

}

});

server.listen(process.env.PORT || 3002,()=>{
console.log("Servidor PATH PARAMS en puerto 3002");
});
