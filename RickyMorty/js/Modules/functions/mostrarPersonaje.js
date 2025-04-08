import { espanol } from "./espanol.js";
import { contenedor } from "../../script.js";
import { obtenerPersonajes } from "./obtenerPersonajes.js";

export async function mostrarPersonaje(request = undefined, status = 0) {
  if (status === 3) {
    obtenerPersonajes(request, 3).then((personajes) => {
      if (personajes) {
        personajes.forEach((personaje) => {
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
      }
    });
  }
  if (status === 2) {
    obtenerPersonajes(request, 2).then((personajes) => {
      if (personajes) {
        personajes.forEach((personaje) => {
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
      }
    });
  }
  if (status === 0) {
    obtenerPersonajes(request).then((personajes) => {
      if (personajes) {
        personajes.forEach((personaje) => {
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
      }
    });
  }
  if (status === 1) {
    obtenerPersonajes(request, 1).then((personajes) => {
      if (personajes) {
        personajes.forEach((personaje) => {
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
      }
    });
  }
}
