export function cerrarVentana() {
  const ventana = document.getElementById("ventana-emergente");
  if (ventana) {
    ventana.remove();
  }
}
