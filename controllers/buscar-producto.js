document.addEventListener("keyup", (e) => {
  if (e.target.matches("[data-buscarP]")) {
    let texto = e.target.value.toLowerCase();
    console.log(texto);
    if (e.key === "Escape") e.target.value = "";
    document.querySelectorAll(".productos__contenedor").forEach((producto) =>
      producto.textContent.toLowerCase().includes(texto)
      ? producto.classList.remove("ocultarProd") : producto.classList.add("ocultarProd")
    );
  }
});


