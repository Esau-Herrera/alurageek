import { productosServicios } from "../service/productos-service.js";

const contenedorGeneral = document.querySelector("[data-contenedor-edicion]");
const listaCategorias = ['Star Wars','Consolas', 'Diversos'];

const crearCategorias = (titulo) => {
  const grupo = document.createElement('div');
  grupo.classList.add("grupo");
  grupo.insertAdjacentHTML('beforeend', `
  <div class="lista__cabecera">
    <p class="lista__titulo">${titulo}</p>
    <div class="lista__contenedor">
      <a href="../screens/todos-productos.html" class="lista__link">Ver todo<ion-icon name="arrow-forward-outline"></ion-icon></a>            
    </div>
  </div>
  <div class="lista__productos" data-listaProductos></div>
  `);
  return grupo
}

const crearProducto =(imagen,nombre,precio,id,categoria) => {
  const contenedorProducto = document.createElement('div');
  contenedorProducto.classList.add("productos__contenedor");
  const contenidoProducto = `
  <img src="${imagen}" alt="${nombre}" class="productos__imagen">
  <div class="productos__info">
    <p class="productos__nombre" data-prod-nombre>${nombre}</p>
    <p class="productos__precio">$ ${precio}</p>
    <a class="productos__link" href="../screens/detalle-producto.html?id=${id}">Ver producto</a>
    <p class="productos__categoria">${categoria}</p>
  </div>
  <div class="edicion__iconos"> 
      <button>
        <ion-icon class="borrar" id="${id}" name="trash"></ion-icon>       
      </button>      
      <a href="../screens/editar-producto.html?id=${id}">      
        <ion-icon class="editar" name="create"></ion-icon>      
      </a>
    </div>
  `;
  contenedorProducto.innerHTML = contenidoProducto;
  const alerta = document.querySelector(".aviso");
  const btnBorrar = contenedorProducto.querySelector(".borrar");
  btnBorrar.addEventListener('click', async () => {
    const id = btnBorrar.id;
    alerta.classList.remove("ocultar");
    alerta.classList.add("mostrar");
    setTimeout(async () => {
      alerta.classList.add("ocultar");
      try {
        await productosServicios.eliminarProducto(id);
      } catch (err) {
        alert('Ocurrió un error');
      }
    }, 1500);
  });
  return contenedorProducto
}

const agregarCategorias = () => {
  listaCategorias.forEach((categoria) => {
    if (categoria) {
      contenedorGeneral.appendChild(crearCategorias(categoria))
    }
  });
}

const lista = document.getElementsByClassName("lista__productos");

const agregarProductos = async () => {
  try {
    const producto = await productosServicios.enlaceProductos();
    producto.forEach(({imagen,nombre,precio,id,categoria}) => {
      const nvoProducto = crearProducto(imagen,nombre,precio,id,categoria);
      listaCategorias.forEach((cat, i) => {
        if (cat === categoria) {
          lista[i].appendChild(nvoProducto);
        }
      });
    });
  } catch (err) {
    alert('Ocurrió un error');
  }
}

agregarCategorias();
agregarProductos();
