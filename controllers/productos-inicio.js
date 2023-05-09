import { productosServicios } from "../service/productos-service.js";

const contenedorPrincipal = document.querySelector("[data-contendor-general]");
let listaCategorias = ['Star Wars','Consolas','Diversos'];

const crearCategorias = (titulo) => {
  const grupo = document.createElement('div');
  grupo.classList.add("grupo");
  const contenidoGrupo = `
  <div class="list__conten">
    <div class="lista__cabecera">
      <p class="lista__titulo">${titulo}</p>
      <div class="lista__contenedor">
      <a href="./screens/todos-productos.html" class="lista__link">Ver todo<ion-icon name="arrow-forward-outline"></ion-icon></a>
      </div>
    </div>
  </div>  
  <div class="lista__productos" data-listaProductos>
  </div>
  `;
  grupo.innerHTML = contenidoGrupo;
  return grupo
}
const agregarCategorias = () => {
  listaCategorias.forEach((categoria) => {
    if (categoria) {
      contenedorPrincipal.appendChild(crearCategorias(categoria))
    }
  });
}
agregarCategorias();

const crearProducto = (imagen,nombre,precio,id,categoria) => {
  const contenedorProducto = document.createElement('div');
  contenedorProducto.classList.add("productos__contenedor");
  const contenidoProducto = `
  <img src="${imagen}" alt="${nombre}" class="productos__imagen">
  <div class="productos__info">
    <p class="productos__nombre">${nombre}</p>
    <p class="productos__precio">$ ${precio}</p>
    <a class="productos__link" href="./alurageek/screens/detalle-producto.html?id=${id}">Ver producto</a>    
    <p class="productos__categoria">${categoria}</p>
  </div>
  `;
  contenedorProducto.innerHTML = contenidoProducto;
  return contenedorProducto
}

const lista = document.getElementsByClassName("lista__productos");

productosServicios.enlaceProductos().then((producto) => {
  producto.forEach(({imagen,nombre,precio,id,categoria}) => {
    const nvoProducto = crearProducto(imagen,nombre,precio,id,categoria);
    listaCategorias.forEach((cat,i) => {
      if (cat === categoria) {
        lista[i].appendChild(nvoProducto);
      }
    });
  });
}).catch((err) => alert('Ocurrió un error'));