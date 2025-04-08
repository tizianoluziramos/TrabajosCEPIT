import { eliminarResultados } from "./eliminarResultados.js"
import { mostrarDetallePersonaje } from "./mostrarDetallePersonaje.js"
import { buscarPersonajePorNombre } from "./buscarPersonajePorNombre.js"
import { obtenerPersonajes } from "./obtenerPersonajes.js"
import { mostrarPersonaje } from "./mostrarPersonaje.js"
import { setPagina } from "../vars/state.js"
import {
  contenedor,
  statusaliveboton,
  statusdeadboton,
  statusunknownboton,
  clearfilterboton,
  form,
  searchInput,
  botonext,
  botonprev,
  setTerminoBusquedaActual,
  setEstadoSeleccionado,
} from "../vars/variables.js"

export function cargarCodigo() {
  if (window.mostrarDetallePersonaje !== mostrarDetallePersonaje || window.obtenerPersonajes !== obtenerPersonajes) {
    window.mostrarDetallePersonaje = mostrarDetallePersonaje;
    window.obtenerPersonajes = obtenerPersonajes;
  }
  mostrarPersonaje();
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    let searchTerm = searchInput.value.trim();
    setTerminoBusquedaActual(searchTerm);
    setPagina(1);
    if (searchTerm) {
      await buscarPersonajePorNombre(searchTerm);
    } else {
      alert("Por favor ingrese un termino de busqueda");
    }
  });

  clearfilterboton.addEventListener("click", () => {
    setEstadoSeleccionado(null);
    setPagina(1);
    botonext.disabled = false;
    botonprev.disabled = true;
    setTerminoBusquedaActual(null);
    searchInput.value = "";
    eliminarResultados();
    mostrarPersonaje();
  });

  statusaliveboton.addEventListener("click", () => {
    setEstadoSeleccionado("Alive");
    setPagina(1);
    eliminarResultados();
    mostrarPersonaje("", 1);
  });

  statusunknownboton.addEventListener("click", () => {
    setEstadoSeleccionado("Unknown");
    setPagina(1);
    eliminarResultados();
    mostrarPersonaje("", 3);
  });

  statusdeadboton.addEventListener("click", () => {
    setEstadoSeleccionado("Dead");
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
