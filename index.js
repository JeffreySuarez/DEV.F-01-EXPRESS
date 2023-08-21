const express = require("express"); //importamos expresss desde el node_modules
const server = express(); // lo guardamos en una variable --> El me devuelve un objeto {} dentro de ese objeto tenemos varios metodos entre esos estas .get .post .put .delete etc
//.get se genera es una ruta
const port = 3000; // en el puerto levantamos la instancia del server

// ****************************MIDDLEWARE*******************************
//middleware para aceptar json
//paso 1 --> instalar con npm intall body-parser
const bodyParser = require("body-parser");

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));

// ********************************************************************

let marketProducts = [
  {
    id: 1,
    name: "Ferrari",
    color: "red",
    price: 250,
    stock: 4,
  },
  {
    id: 2,
    name: "Porche",
    color: "blue",
    price: 150,
    stock: 2,
  },
  {
    id: 3,
    name: "Mazda",
    color: "black",
    price: 50,
    stock: 8,
  },
  {
    id: 4,
    name: "Ford",
    color: "yellow",
    price: 30,
    stock: 2,
  },
  {
    id: 5,
    name: "LandRover",
    color: "black",
    price: 155,
    stock: 7,
  },
  {
    id: 6,
    name: "Toyota Corolla",
    color: "red",
    price: 255,
    stock: 3,
  },
  {
    id: 7,
    name: "LandRover",
    color: "pink",
    price: 15,
    stock: 23,
  },
  {
    id: 8,
    name: "LandRover",
    color: "gray",
    price: 155,
    stock: 78,
  },
  {
    id: 9,
    name: "Ford Mustang",
    color: "yellow",
    price: 450,
    stock: 10,
  },
  {
    id: 10,
    name: "Omega",
    color: "gray",
    price: 155,
    stock: 2,
  },
];

// vamos a usar query
// ejemplo de su uso
// QUERY --> peticion req.query
// como armar un query => luego del endpoint agregar ?clave=valor

server.get("/vehiculos", (req, res) => {
  //1. - Filtrar por query los colores
  //2. - Filtrar por query los precios
  //3. - Filtrar por query el stock

  try {
    let color = req.query.color;
    let price = req.query.price;
    let stock = req.query.stock;

    if (color) {
      let productoEncontrado = marketProducts.filter((car) => car.color === color);
      res.status(200).json(productoEncontrado);
      console.log("====================================");
      console.log(productoEncontrado);
      console.log("====================================");

      //localhost:3000/vehiculos?color=yellow
      /*[  
      { name: 'Ford', color: 'yellow', price: '30000', stock: '2' },
      { name: 'LandRover', color: 'yellow', price: '155000', stock: '7' }
    ]*/
    } else if (price) {
      let productoEncontrado = marketProducts.filter((car) => car.price <= price);
      res.status(200).json(productoEncontrado);

      console.log("====================================");
      console.log(productoEncontrado);
      console.log("====================================");
    } else if (stock) {
      let productoEncontrado = marketProducts.filter((car) => car.stock >= stock);

      res.status(200).json(productoEncontrado);

      console.log("====================================");
      console.log(productoEncontrado);
      console.log("====================================");
    } else {
      console.log("====================================");
      console.log(marketProducts);
      console.log("====================================");
      //localhost:3000/vehiculos

      /*
    [
  { name: 'Ferrari', color: 'red', price: '250000', stock: '4' },    
  { name: 'Porche', color: 'blue', price: '150000', stock: '2' },    
  { name: 'Mazda', color: 'black', price: '50000', stock: '8' },     
  { name: 'Ford', color: 'yellow', price: '30000', stock: '2' },     
  { name: 'LandRover', color: 'yellow', price: '155000', stock: '7' }
  }
  */

      res.status(200).json(marketProducts);
    }
  } catch (error) {
    console.log("Este es el error que ocaciona todo --->", error);
    res.status(404).json("NOT FOUND");
  }
});

server.get("/vehiculos/:name", (req, res) => {
  try {
    let name = req.params.name;

    if (name) {
      let productoEncontrado = marketProducts.find((car) => car.name === name);
      res.status(200).json(productoEncontrado);
    } else {
      res.status(200).json(marketProducts);
    }
  } catch (error) {
    console.log("Este es el error que ocaciona todo --->", error);
    res.status(404).json("NOT FOUND");
  }
});

server.get("/vehiculos/:id", (req, res) => {
  try {
    let id = Number(req.params.id);

    if (id) {
      let productoEncontrado = marketProducts.find((car) => car.id === id);
      res.status(200).json(productoEncontrado);
    } else {
      res.status(200).json(marketProducts);
    }
  } catch (error) {
    console.log("Este es el error que ocaciona todo --->", error);
    res.status(404).json("NOT FOUND");
  }
});
// *******************************************************************
// **************************FIN PARAMS********************************

//Crear un producto
server.post("/vehiculos", (req, res) => {
  try {
    const newProduct = req.body;
    console.log(newProduct);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(404).send("error en la ruta post");
  }
});
// *******************************************************************
// **************************FIN POST********************************

//Editar un producto por body
server.patch("/product", (req, res) => {
  res.send("Estoy en la ruta patch");
});

// *******************************************************************
// **************************FIN PATCH********************************

server.delete("/product", (req, res) => {
  res.send("Estoy en la ruta delete ");
});

//Escucha del servidor
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
