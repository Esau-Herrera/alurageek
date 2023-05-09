import { productosServicios } from "../service/productos-service.js";
const ulr = new URL(window.location);
const id = ulr.searchParams.get('id');

const contenedorPrincipal = document.querySelector("[data-detalle-contenedor]");
const obtenerInfoProd = () => {
  if (id === null) {
    window.location.href = '../screens/error.html';
  }
  productosServicios.detalleProducto(id).then((producto) => {
    const nombre = producto.nombre;
    const precio = producto.precio;
    const imagen = producto.imagen;
    const categoria = producto.categoria;
    const descripcion = producto.descripcion;
    const productoDetalle = document.createElement('section');
    productoDetalle.classList.add("detalle__producto");
    const contenidoProducto = `
    <div class="producto__cabecera">
      <p class="producto__titulo" id="titulo__categoria">${categoria}</p>
    </div>
    <div class="producto__contenedor">      
      <img src="../${imagen}" alt="${nombre}" class="producto__imagen">
      <div class="producto__info">
        <p class="producto__nombre">${nombre}</p>
        <p class="producto__precio">$ ${precio}</p>
        <p class="producto__descripcion">${descripcion}</p>
      </div>
    </div>
    <section class="otros__inicio">
      <div class="otros__productos">
        <p class="otros__titulo">Otros productos de ${categoria}</p>
        <div class="otros__contenedor"></div>
      </div>
    </section>
    `;
    productoDetalle.innerHTML = contenidoProducto;
    contenedorPrincipal.appendChild(productoDetalle);
  });      
}
obtenerInfoProd();

const crearProducto = (imagen,nombre,precio,id,categoria) => {
  const contenedorProducto = document.createElement('div');
  contenedorProducto.classList.add("productos__contenedor");
  const contenidoProducto = `  
  <img src="../${imagen}" alt="${nombre}" class="productos__imagen">
  <div class="productos__info">
    <p class="productos__nombre">${nombre}</p>
    <p class="productos__precio">$ ${precio}</p>
    <a class="productos__link" href="../screens/detalle-producto.html?id=${id}">Ver producto</a>
    <p class="productos__id ocultar" data-id="${id}">${id}</p>
    <p class="productos__categoria">${categoria}</p>
  </div>
  `;
  contenedorProducto.innerHTML = contenidoProducto;
  return contenedorProducto
}

const lista = document.getElementsByClassName("otros__contenedor");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // const referencia = document.getElementById("otrosCat").textContent;
    const referencia = document.getElementById("titulo__categoria").textContent;
    setTimeout(() => {
      productosServicios.enlaceProductos().then((producto) => {
        const prodFiltrados = producto.filter(({categoria}) => categoria === referencia);        
        prodFiltrados.forEach(({imagen,nombre,precio,id,categoria}) => {                  
          const nvoProducto = crearProducto(imagen,nombre,precio,id,categoria);                 
          lista[0].appendChild(nvoProducto);
        });
        const prodId = document.querySelectorAll("[data-id]");      
        for (let i = 0; i < prodId.length; i++) {
          if(prodId[i].textContent === id){
            const elementoEliminar = prodId[i].parentNode.parentNode;            
            elementoEliminar.classList.add('ocultar');
          }
        }
      }).catch((err) => console.log(err));
    },1)
  }, 200);
  
})

