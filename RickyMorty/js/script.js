import { watermark } from "./Copyright/watermark.js";
import { cargarCodigo } from "./Modules/functions/index.js";

document.addEventListener("DOMContentLoaded", () => {
  watermark();
  cargarCodigo();
});

document.addEventListener("error", (e) => {
  // quitar errores un poco molestos de la ventanita de browser
  e.preventDefault();
});