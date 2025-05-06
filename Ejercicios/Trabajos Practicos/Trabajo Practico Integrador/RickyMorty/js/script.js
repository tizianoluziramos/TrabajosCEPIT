import { watermark } from "./Copyright/watermark.js";
import { cargarCodigo } from "./Modules/functions/index.js";

document.addEventListener("DOMContentLoaded", () => {
  watermark();
  cargarCodigo();
});

document.addEventListener("error", (e) => {
  e.preventDefault();
});