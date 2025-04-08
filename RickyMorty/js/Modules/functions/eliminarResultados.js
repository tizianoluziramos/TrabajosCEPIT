import { contenedor } from "../vars/variables.js"

export function eliminarResultados() {
  const listItems = contenedor.querySelectorAll("li");
  listItems.forEach((li) => {
    li.remove();
  });
  const personajes = document.querySelectorAll(".personaje-info");
  personajes.forEach((div) => div.remove());
}
