const express = require("express"); //importamos expresss desde el node_modules
const server = express(); // lo guardamos en una variable --> El me devuelve un objeto {} dentro de ese objeto tenemos varios metodos entre esos estas .get .post .put .delete etc
//.get se genera es una ruta
const port = 3000; // en el puerto levantamos la instancia del server

//ejemplo al endpoint "/"
//RUTAS Y ENDPOINTS
//res => response respuesta
//req => request peticion
//server.get("endpoint a donde voy a hacer el get", (req, res, next)=>{ respuesta que deseo})
server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.get("/product", (req, res) => {
  res.send("Esta ruta me traería todos los productos");
});

//PARAMS --> peticion de req.param
//los dos puntos le dicen a mi endpoint que es un parametro
server.get("/product/:id", (req, res) => {
  let id = req.params.id;
  res.send("hello get");
  console.log("Esta ruta me va a traer el producto especificado", Number(id));
});

server.get("/perro/:raza/:color", (req, res) => {
  let raza = req.params.raza;
  let color = req.params.color;
  let params = req.params;

  console.log("la raza del perro es", raza);
  console.log("el color del perro es ", color);
  console.log("el contenido del params es", params);
  // params: { raza: 'chauchau', color: 'marron' }
  console.log("el contenido del req es", req);

  res.send("hello get perro");
});

//params con destructuring otro ejemplo

server.get("/alacena/:tipo/:cantidad", (req, res) => {
  let { tipo } = req.params;
  let { cantidad } = req.params;

  console.log("la alacena es:", tipo);
  console.log("la cantidad es ", Number(cantidad));
  res.send("ruta alacena");
});

// *******************************************************************
// ***************************FIN req.params**************************

// vamos a usar query
// ejemplo de su uso
// QUERY --> peticion req.query
// como armar un query => luego del endpoint agregar ?clave=valor

server.get("/vehiculos", (req, res) => {
  let categori = req.query.categori;

  if (categori === "mazda") {
    console.log("es un mazda");
  } else if (categori === "porche") {
    console.log("es un porche");
  } else {
    console.log("no es un carro");
  }

  console.log("Esta ruta me traeria todos los productos segun filtro");
  console.log("Que es Query", categori);
  //Que es Query {}

  //localhost:3000/vehiculos/?order=ascendente&categori=mazda&color=rojo
  //Que es Query { order: 'ascendente', categori: 'mazda', color: 'rojo' }
  res.send("Hola soy un query");
});

// *******************************************************************
// **************************FIN QUERY********************************

server.post("/product", (req, res) => {
  res.send("Estoy en la ruta post");
});

server.patch("/product", (req, res) => {
  res.send("Estoy en la ruta patch");
});

server.delete("/product", (req, res) => {
  res.send("Estoy en la ruta delete ");
});

//Escucha del servidor
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
