
const btnEntrar = document.querySelector('[data-entrar-btn]');
const alerta = document.querySelector('.aviso');

btnEntrar.addEventListener('click',(e) => {
  e.preventDefault();
  
  const credenciales = {
    correo: 'admin797@admin.com',
    contrasenha: 'abc123ABC&',
  }
  
  const correoIngresado = document.querySelector('.sesion__correo').value;
  const contrasenhaIngresada = document.querySelector('.sesion__contrasenha').value;
  
  if (correoIngresado == credenciales.correo &&
    contrasenhaIngresada == credenciales.contrasenha) {
      alerta.classList.remove('ocultar');
      alerta.classList.add('mostrar');
      setTimeout(() => {
        alerta.classList.add('ocultar');
        window.location.href = "../screens/productos.html";
      }, 1800);
    } else {
      alert('Correo o contraseña incorrectos, intente de nuevo');
    }
});