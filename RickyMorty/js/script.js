import { loop } from "./Copyright/loop.js";
import { cargarCodigo } from "./Modules/functions/index.js";

document.addEventListener("DOMContentLoaded", () => {
  cargarCodigo();
  loop();
});
