import {productosServicios } from "../service/productos-service.js";

const btnAgregarProd = document.querySelector('[data-registro-btn]');
const alerta = document.querySelector('.aviso');

btnAgregarProd.addEventListener('click',(e) => {
  e.preventDefault();
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
      productosServicios.agregarProducto(nombre,precio,imagen,categoria,descripcion).then(() => {
        window.location.href = "/screens/productos.html";
      }).catch(err => console.log(err));
    }, 1800);
  }
});







/*
//esta es una otra forma de hacer lo mismo de arriba

const btnAgregarProd = document.querySelector('[data-registro-btn]');

const crearProducto = (e) => {
  e.preventDefault();
  const nombre = document.querySelector('[data-form-nombre]').value;
  const precio = document.querySelector('[data-form-precio]').value;
  const imagen = document.querySelector('[data-form-img]').value;
  const categoria = document.querySelector('[data-form-categoria]').value;
  const descripcion = document.querySelector('[data-form-descripcion]').value;
  
  if (nombre == "" || precio == "" || imagen == "" || categoria == "" || descripcion == "") {
    alert('Ningun campo puede estar vacío')
  } else {
    productosServicios.agregarProducto(nombre,precio,imagen,categoria,descripcion).then(respuesta => { console.log(respuesta)})
  }
};

btnAgregarProd.addEventListener('submit',crearProducto);
*/
