import { eliminarResultados } from "./Modules/functions/eliminarResultados.js";
import { verificarDatosNull } from "./Modules/functions/verificarDatosNull.js";
import { loop } from "./Copyright/loop.js";
import { mostrarDetallePersonaje } from "./Modules/functions/mostrarDetallePersonaje.js";
import { buscarPersonajePorNombre } from "./Modules/functions/buscarPersonajePorNombre.js";
import { mostrarPersonaje } from "./Modules/functions/mostrarPersonaje.js";

export const contenedor = document.getElementById("results-container");
export let terminoBusquedaActual = null;

export async function obtenerPersonajes(a) {
  try {
    eliminarResultados();
    let url = `https://rickandmortyapi.com/api/character/?page=${pagina}`;
    if (estadoseleccionado) url += `&status=${estadoseleccionado}`;
    if (terminoBusquedaActual) url += `&name=${terminoBusquedaActual}`;

    let validacion = await verificarDatosNull(pagina, estadoseleccionado);

    if (a === "previo") {
      if (pagina > 1) {
        pagina--;
        validacion = await verificarDatosNull(pagina, estadoseleccionado);
        botonext.disabled = !validacion;
      }
    }

    if (a === "siguiente") {
      pagina++;
      validacion = await verificarDatosNull(pagina, estadoseleccionado);
      botonext.disabled = !validacion;
    }

    botonprev.disabled = pagina <= 1;

    url = `https://rickandmortyapi.com/api/character/?page=${pagina}`;
    if (estadoseleccionado) url += `&status=${estadoseleccionado}`;
    if (terminoBusquedaActual) url += `&name=${terminoBusquedaActual}`;

    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
  }
}

window.obtenerPersonajes = obtenerPersonajes;
let pagina = 1;
let estadoseleccionado = null;
let botonext = document.getElementById("siguiente");
let botonprev = document.getElementById("previo");
botonprev.disabled = true;
const statusaliveboton = document.getElementById("statusalive");
const statusdeadboton = document.getElementById("statusdead");
const statusunknownboton = document.getElementById("statusunknown");
const clearfilterboton = document.getElementById("clearfilter");
const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

window.mostrarDetallePersonaje = mostrarDetallePersonaje;

function main() {
  mostrarPersonaje();
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    let searchTerm = searchInput.value.trim();
    terminoBusquedaActual = searchTerm;
    pagina = 1;
    if (searchTerm) {
      await buscarPersonajePorNombre(searchTerm);
    } else {
      contenedor.innerHTML =
        "<div>Por favor ingrese un término de búsqueda.</div>";
    }
  });

  clearfilterboton.addEventListener("click", () => {
    estadoseleccionado = null;
    pagina = 1;
    botonext.disabled = false;
    botonprev.disabled = true;
    terminoBusquedaActual = null;
    searchInput.value = "";
    eliminarResultados();
    mostrarPersonaje();
  });

  statusaliveboton.addEventListener("click", () => {
    estadoseleccionado = "Alive";
    pagina = 1;
    eliminarResultados();
    mostrarPersonaje("", 1);
  });

  statusunknownboton.addEventListener("click", () => {
    estadoseleccionado = "Unknown";
    pagina = 1;
    eliminarResultados();
    mostrarPersonaje("", 3);
  });

  statusdeadboton.addEventListener("click", () => {
    estadoseleccionado = "Dead";
    pagina = 1;
    eliminarResultados();
    mostrarPersonaje("", 2);
  });

  botonext.addEventListener("click", () => {
    eliminarResultados();
    mostrarPersonaje("siguiente");
  });

  botonprev.addEventListener("click", () => {
    eliminarResultados();
    mostrarPersonaje("previo");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  main();
  loop();
});
