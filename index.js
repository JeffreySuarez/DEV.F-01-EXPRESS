const express = require("express"); //importamos expresss desde el node_modules
const server = express(); // lo guardamos en una variable
const port = 3000; // en el puerto levantamos la instancia del server

//ejemplo al endpoint "/"
server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.get("/ejemplo", (req, res) => {
  res.send("Estoy en la ruta de ejemplo");
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
