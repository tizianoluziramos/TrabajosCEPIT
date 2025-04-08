import { eliminarResultados } from "./Modules/functions/eliminarResultados.js";
import { loop } from "./Copyright/loop.js";
import { mostrarDetallePersonaje } from "./Modules/functions/mostrarDetallePersonaje.js";
import { buscarPersonajePorNombre } from "./Modules/functions/buscarPersonajePorNombre.js";
import { obtenerPersonajes } from "./Modules/functions/obtenerPersonajes.js";
import { mostrarPersonaje } from './Modules/functions/mostrarPersonaje.js'
import { setPagina } from "./Modules/vars/state.js";
import { contenedor, statusaliveboton, statusdeadboton, statusunknownboton, clearfilterboton, form, searchInput } from "./Modules/vars/variables.js";

export let estadoseleccionado = null;
export let terminoBusquedaActual = null;

let botonext = document.getElementById("siguiente");
let botonprev = document.getElementById("previo");
botonprev.disabled = true;


window.mostrarDetallePersonaje = mostrarDetallePersonaje;
window.obtenerPersonajes = obtenerPersonajes;

function main() {
  mostrarPersonaje();
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    let searchTerm = searchInput.value.trim();
    terminoBusquedaActual = searchTerm;
    setPagina(1);
    if (searchTerm) {
      await buscarPersonajePorNombre(searchTerm);
    } else {
      contenedor.innerHTML =
        "<div>Por favor ingrese un término de búsqueda.</div>";
    }
  });

  clearfilterboton.addEventListener("click", () => {
    estadoseleccionado = null;
    setPagina(1);
    botonext.disabled = false;
    botonprev.disabled = true;
    terminoBusquedaActual = null;
    searchInput.value = "";
    eliminarResultados();
    mostrarPersonaje();
  });

  statusaliveboton.addEventListener("click", () => {
    estadoseleccionado = "Alive";
    setPagina(1);
    eliminarResultados();
    mostrarPersonaje("", 1);
  });

  statusunknownboton.addEventListener("click", () => {
    estadoseleccionado = "Unknown";
    setPagina(1);
    eliminarResultados();
    mostrarPersonaje("", 3);
  });

  statusdeadboton.addEventListener("click", () => {
    estadoseleccionado = "Dead";
    setPagina(1);
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
