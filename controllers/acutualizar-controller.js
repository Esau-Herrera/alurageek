import { productosServicios } from "../service/productos-service.js";

const btnActualizarProducto = document.querySelector('[data-actualizar-btn]');
const alerta = document.querySelector('.aviso');


const obtenerInfo = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get('id');

  if (id === null) {
    window.location.href = '../screens/error.html';
  }

  const nombre = document.querySelector('[data-tipo="nombre"]');
  const precio = document.querySelector('[data-tipo="precio"]');
  const imagen = document.querySelector('[data-tipo="img"]');
  const categoria = document.querySelector('[data-tipo="categoria"]');
  const descripcion = document.querySelector('[data-tipo="descripcion"]');

  productosServicios.detalleProducto(id).then((producto) => {
    nombre.value = producto.nombre;
    precio.value = producto.precio;
    imagen.value = producto.imagen;
    categoria.value = producto.categoria;
    descripcion.value = producto.descripcion;
  });
}
obtenerInfo();


btnActualizarProducto.addEventListener('click',(e) => {
  e.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get('id');

  const nombre = document.querySelector('[data-tipo="nombre"]').value;
  const precio = document.querySelector('[data-tipo="precio"]').value;
  const imagen = document.querySelector('[data-tipo="img"]').value;
  const categoria = document.querySelector('[data-tipo="categoria"]').value;
  const descripcion = document.querySelector('[data-tipo="descripcion"]').value;
  
  if (nombre == "" || precio == "" || imagen == "" || categoria == "" || descripcion == "") {
    alert('Ningun campo puede estar vacío');
  } else {
    alerta.classList.remove('ocultar');
    alerta.classList.add('mostrar');
    setTimeout(() => {
      alerta.classList.add('ocultar');
      productosServicios.actualizarProducto(nombre,precio,imagen,categoria,descripcion,id).then(() => {
        window.location.href = "../screens/productos.html";
      }).catch(err => console.log(err));
    }, 1800);
  }  
});