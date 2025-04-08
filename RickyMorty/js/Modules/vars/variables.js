export const contenedor = document.getElementById("results-container");
export const statusaliveboton = document.getElementById("statusalive");
export const statusdeadboton = document.getElementById("statusdead");
export const statusunknownboton = document.getElementById("statusunknown");
export const clearfilterboton = document.getElementById("clearfilter");
export const form = document.getElementById("searchForm");
export const searchInput = document.getElementById("searchInput");

export let botonext = document.getElementById("siguiente");
let botonprev = document.getElementById("previo");
botonprev.disabled = true;
export { botonprev };

export let estadoseleccionado = null;
export let terminoBusquedaActual = null;

export function getEstadoSeleccionado() {
  return estadoseleccionado;
}
export function setEstadoSeleccionado(valor) {
  estadoseleccionado = valor;
}

export function getTerminoBusquedaActual() {
  return terminoBusquedaActual;
}
export function setTerminoBusquedaActual(valor) {
  terminoBusquedaActual = valor;
}
