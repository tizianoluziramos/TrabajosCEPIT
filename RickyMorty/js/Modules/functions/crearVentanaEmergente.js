import { generarParrafoPersonaje } from "./generarParrafoPersonaje.js";
import { cerrarVentana } from './cerrarVentana.js'

export function crearVentanaEmergente(personaje) {
  const ventanaExistente = document.getElementById("ventana-emergente");
  if (ventanaExistente) {
    console.log("Ya hay una ventana emergente abierta.");
    return;
  }

  const ventana = document.createElement("div");
  ventana.id = "ventana-emergente";
  ventana.style.position = "fixed";
  ventana.style.top = "50%";
  ventana.style.left = "50%";
  ventana.style.transform = "translate(-50%, -50%)";
  ventana.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  ventana.style.color = "#fff";
  ventana.style.padding = "20px";
  ventana.style.borderRadius = "10px";
  ventana.style.zIndex = "1000";
  ventana.style.maxWidth = "400px";
  ventana.style.width = "80%";
  
  const cerrar = document.createElement("span");
  cerrar.innerHTML = "X";
  cerrar.style.position = "absolute";
  cerrar.style.top = "10px";
  cerrar.style.right = "10px";
  cerrar.style.cursor = "pointer";
  cerrar.style.fontSize = "20px";
  cerrar.style.fontWeight = "bold";
  cerrar.style.color = "#fff";

  cerrar.addEventListener("click", function () {
    cerrarVentana(ventana);
  });

  ventana.innerHTML = `
      <div>
        <h2>Detalles de ${personaje.name}</h2>
        ${generarParrafoPersonaje(personaje)}
      </div>
    `;

  ventana.appendChild(cerrar);

  document.body.appendChild(ventana);
}
