

const enlaceProductos = () =>
  fetch("https://my-json-server.typicode.com/Esau-Herrera/alurageek/productos").then((respuesta) => respuesta.json());
  


const agregarProducto = (nombre,precio,imagen,categoria,descripcion) => {
  return fetch("https://my-json-server.typicode.com/Esau-Herrera/alurageek/productos", {  
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre,precio,imagen,categoria,descripcion,id}),
  })
}

const eliminarProducto = (id) => {  
  return fetch(`https://my-json-server.typicode.com/Esau-Herrera/alurageek/productos/${id}`, {  
    method: "DELETE"
  })
}

const id = () => {
  const idCompleto = uuid.v4();
  return idCompleto.slice(0.5);
}

const detalleProducto = (id) => {
  return fetch(`https://my-json-server.typicode.com/Esau-Herrera/alurageek/productos/${id}`).then((respuesta) => respuesta.json());  
}

const actualizarProducto = (nombre,precio,imagen,categoria,descripcion,id) => {
  return fetch(`https://my-json-server.typicode.com/Esau-Herrera/alurageek/productos/${id}`, {  
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre,precio,imagen,categoria,descripcion}),
  })
}

export const productosServicios = {
  enlaceProductos,
  agregarProducto,
  eliminarProducto,
  detalleProducto,  
  actualizarProducto
};



/*

const enlaceProductos = () =>
  fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());


const agregarProducto = (nombre,precio,imagen,categoria,descripcion) => {  
  return fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre,precio,imagen,categoria,descripcion,id}),
  })
}

const eliminarProducto = (id) => {  
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE"
  })
}

const id = () => {
  const idCompleto = uuid.v4();
  return idCompleto.slice(0.5);
}

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());
}

const actualizarProducto = (nombre,precio,imagen,categoria,descripcion,id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre,precio,imagen,categoria,descripcion}),
  })
}




export const productosServicios = {
  enlaceProductos,
  agregarProducto,
  eliminarProducto,
  detalleProducto,  
  actualizarProducto
};


*/

