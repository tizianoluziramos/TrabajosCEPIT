import { setPagina } from "./state.js"

export function modificarVariable(nombre, data) {
  if (nombre === "pagina") {
    setPagina(data);
  }

  if (nombre === "botonext") {
    document.getElementById("siguiente").disabled = data;
  }

  if (nombre === "botonprev") {
    document.getElementById("previo").disabled = data;
  }
}