import { eliminarResultados } from "./Modules/functions/eliminarResultados.js";
import { loop } from "./Copyright/loop.js";
import { mostrarDetallePersonaje } from "./Modules/functions/mostrarDetallePersonaje.js";
import { buscarPersonajePorNombre } from "./Modules/functions/buscarPersonajePorNombre.js";
import { obtenerPersonajes } from "./Modules/functions/obtenerPersonajes.js";
import { mostrarPersonaje } from './Modules/functions/mostrarPersonaje.js'

export let pagina = 1;
export let estadoseleccionado = null;
export const contenedor = document.getElementById("results-container");
export let terminoBusquedaActual = null;

let botonext = document.getElementById("siguiente");
let botonprev = document.getElementById("previo").disabled = true;
const statusaliveboton = document.getElementById("statusalive");
const statusdeadboton = document.getElementById("statusdead");
const statusunknownboton = document.getElementById("statusunknown");
const clearfilterboton = document.getElementById("clearfilter");
const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

window.mostrarDetallePersonaje = mostrarDetallePersonaje;

export function modificarVariable(nombre, data) {
  if (nombre === "pagina") {
    pagina = data;
  }
  if (nombre === "botonext") {
    botonext.disabled = data;
  }
  if (nombre === "botonprev") {
    botonprev.disabled = data;
  }
}

window.obtenerPersonajes = obtenerPersonajes;

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
