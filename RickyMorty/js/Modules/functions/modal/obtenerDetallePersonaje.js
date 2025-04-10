import { espanol } from "../espanol.js";

export async function obtenerDetallePersonaje(id) {
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
