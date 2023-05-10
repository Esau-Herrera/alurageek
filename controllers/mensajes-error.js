
function validar (input) {
  const tipoDeInput = input.dataset.tipo;
  const contenedor = input.parentElement;
  const mensajeError = contenedor.querySelector('.formulario__error');

  if (input.validity.valid) {
    contenedor.classList.remove('contenedor__error');
    mensajeError.innerHTML = "";
  } else {
    contenedor.classList.add('contenedor__error');
    mensajeError.innerHTML = mostrarMensajeDeError(tipoDeInput,input);
  }
}

const tipoDeError = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError',
];


const mensajesDeError = {
  producto: {
    valueMissing: "El campo nombre no puede estar vacío"
  },
  precio: {
    valueMissing: "El campo precio no puede estar vacío",
    stepMismatch: "Ejemplo 1.78"
  },  
  img: {
    valueMissing: "El campo imagen no puede estar vacío"
  },
  categoria: {
    valueMissing: "El campo categoria no puede estar vacío"
  },
  descripcion: {
    valueMissing: "El campo descripcion no puede estar vacío"
  },
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío"
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacío"
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch:"El correo no es valido"
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío",
    patternMismatch: "Mínimo 6 caracteres, máximo 12, debe contener una letra minúscula, una mayúscula, un número y alguno de los siguientes caracteres especiales # ! $ % & @"
  },
}

function mostrarMensajeDeError(tipoDeInput, input){
  let mensaje = "";
  for (let error of tipoDeError) {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error]
    }
  }
  return mensaje;
}

const inputs = document.querySelectorAll(".formValidar");

for (let input of inputs) {
  input.addEventListener('blur',(e) => {
    validar(e.target);
  });
}

const btnEnviar = document.querySelector('[data-envia-btn]');
const alertaEnvio = document.querySelector('.envio');

btnEnviar.addEventListener('click',(e) => {
  e.preventDefault();    
  let nombre = document.querySelector('[data-tipo="nombre"]');
  let mensaje = document.querySelector('[data-tipo="mensaje"]');

  if (nombre.value == "" || mensaje.value == "") {
    alert('Ningun campo puede estar vacío');
  } else {
    alertaEnvio.classList.remove('ocultar');
    alertaEnvio.classList.add('mostrar');
    setTimeout(() => {
      console.log(nombre.value,mensaje.value);      
      alertaEnvio.classList.add('ocultar');
      nombre.value = "";
      mensaje.value = "";
    }, 1800);
  }  
});
