import { crearVentanaEmergente } from "./crearVentanaEmergente.js";
import { espanol } from "../generartexto/espanol.js";

async function obtenerDetallePersonaje(id) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    return espanol(data);
  } catch (error) {
    console.error("Error al obtener datos del personaje:", error);
  }
}

export async function mostrarDetallePersonaje(id) {
  const personaje = await obtenerDetallePersonaje(id);
  if (personaje) {
    crearVentanaEmergente(personaje);
  }
}