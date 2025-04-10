import { espanol } from "./espanol.js";

function generarParrafoPersonaje(personaje) {
  personaje = espanol(personaje);
  return `
      <p><strong>Nombre:</strong> ${personaje.name}</p>
      <p><strong>Estado:</strong> ${personaje.status}</p>
      <p><strong>Especie:</strong> ${personaje.species}</p>
      <p><strong>Género:</strong> ${personaje.gender}</p>
      <p><strong>Origen:</strong> ${personaje.origin.name}</p>
      <p><strong>Ubicación:</strong> ${personaje.location.name}</p>
    `;
}

export { generarParrafoPersonaje };