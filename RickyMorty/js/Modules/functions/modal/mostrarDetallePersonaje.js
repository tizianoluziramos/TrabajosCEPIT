import { crearVentanaEmergente } from "./crearVentanaEmergente.js";
import { espanol } from "../generartexto/espanol.js";

export async function mostrarDetallePersonaje(id) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const personaje = await espanol(await response.json());
    if (personaje) {
      crearVentanaEmergente(personaje);
    }
  } catch (error) {
    console.log(error);
  }
}
