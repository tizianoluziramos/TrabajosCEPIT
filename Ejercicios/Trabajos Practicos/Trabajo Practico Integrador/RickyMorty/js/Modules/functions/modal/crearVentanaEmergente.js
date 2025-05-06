import { generarParrafoPersonaje } from "../generartexto/generarParrafoPersonaje.js";
import { cerrarVentana } from "./cerrarVentana.js";

export function crearVentanaEmergente(personaje) {
  const ventanaExistente = document.getElementById("ventana-emergente");
  if (ventanaExistente) {
    console.log("Ya hay una ventana emergente abierta.");
    return;
  }

  const ventana = document.createElement("div");
  ventana.id = "ventana-emergente";

  const cerrar = document.createElement("span");
  cerrar.id = "cerrar-ventana-emergente";
  cerrar.innerHTML = "X";

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
