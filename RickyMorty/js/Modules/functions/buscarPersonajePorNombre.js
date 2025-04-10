import { espanol } from "./espanol.js";
const contenedor = document.getElementById("results-container");

export async function buscarPersonajePorNombre(nombre) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${nombre}`
    );
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      alert(`No se encontró ningún personaje con el nombre "${nombre}".`);
      return;
    }

    contenedor.innerHTML = "";

    data.results.forEach((personaje) => {
      const li = document.createElement("li");
      espanol(personaje);
      li.innerHTML = `
          <div class="result" onclick="mostrarDetallePersonaje(${personaje.id})">
            <img src="${personaje.image}" alt="Imagen de ${personaje.name}">
            <p>Nombre: ${personaje.name}</p>
            <p>Estado: ${personaje.status}</p>
          </div>
        `;
      contenedor.appendChild(li);
    });
  } catch (error) {
    console.error("Error al buscar el personaje:", error);
    alert(`Ocurrió un error al intentar buscar el personaje "${nombre}".`);
  }
}
