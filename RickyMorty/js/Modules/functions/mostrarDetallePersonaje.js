import { obtenerDetallePersonaje } from "./obtenerDetallePersonaje.js";
import { crearVentanaEmergente } from "./crearVentanaEmergente.js";

export async function mostrarDetallePersonaje(id) {
  const personaje = await obtenerDetallePersonaje(id);
  if (personaje) {
    crearVentanaEmergente(personaje);
  }
}