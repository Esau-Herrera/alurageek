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
      <button class="btn__link" id="btn${titulo}">Ver todos<ion-icon name="arrow-forward-outline"></ion-icon></button>
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
  contenedorProducto.setAttribute('data-categoria',categoria);
  const contenidoProducto = `
  <img src="${imagen}" alt="${nombre}" class="productos__imagen">
  <div class="productos__info">
    <p class="productos__nombre">${nombre}</p>
    <p class="productos__precio">$ ${precio}</p>
    <a class="productos__link" href="./screens/detalle-producto.html?id=${id}">Ver producto</a>                               
    <p class="productos__categoria">${categoria}</p>
  </div>
  `;
  contenedorProducto.innerHTML = contenidoProducto;
  return contenedorProducto
}

const botonesVer = document.querySelectorAll('.btn__link');

const alternarVista = (categoria) => {
  const prods = document.querySelectorAll(`[data-categoria="${categoria}"]`);
  prods.forEach((producto) => {
    if (producto.classList.contains('ocultar')) {
      producto.classList.toggle('mostrado');
      producto.classList.toggle('ocultar');
    } else if (producto.classList.contains('mostrado')) {
      producto.classList.toggle('mostrado');
      producto.classList.toggle('ocultar');
    }
  });
}

botonesVer.forEach((btn) => {
  const categoria = btn.id.slice(3);
  btn.addEventListener('click',() => {
    alternarVista(categoria);
  });
});



const lista = document.getElementsByClassName("lista__productos");
const productosPorCat = {};

productosServicios.enlaceProductos().then((producto) => {
  producto.forEach(({imagen,nombre,precio,id,categoria}) => {
    const nvoProducto = crearProducto(imagen,nombre,precio,id,categoria);
    if (!productosPorCat[categoria]) {
      productosPorCat[categoria] = 0;
    }
    listaCategorias.forEach((cat,i) => {
      if (cat === categoria) {
        lista[i].appendChild(nvoProducto);
        productosPorCat[categoria]++;
        if (productosPorCat[categoria] > 4) {
          nvoProducto.classList.add('mostrado');
        }
      }
    });
  });
}).catch((err) => alert('Ocurrió un error'));



