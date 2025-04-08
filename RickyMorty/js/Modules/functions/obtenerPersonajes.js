import { verificarDatosNull } from "./verificarDatosNull.js";
import { eliminarResultados } from "./eliminarResultados.js";
import {
  pagina,
  modificarVariable,
  terminoBusquedaActual,
  estadoseleccionado,
} from "../../script.js";

export async function obtenerPersonajes(a) {
  try {
    eliminarResultados();
    let url = `https://rickandmortyapi.com/api/character/?page=${pagina}`;
    if (estadoseleccionado) url += `&status=${estadoseleccionado}`;
    if (terminoBusquedaActual) url += `&name=${terminoBusquedaActual}`;

    let validacion = await verificarDatosNull(pagina, estadoseleccionado);

    if (a === "previo") {
      if (pagina > 1) {
        modificarVariable("pagina", pagina--);
        validacion = await verificarDatosNull(pagina, estadoseleccionado);
        modificarVariable("botonext", !validacion);
      }
    }

    if (a === "siguiente") {
      modificarVariable("pagina", pagina++);
      validacion = await verificarDatosNull(pagina, estadoseleccionado);
      modificarVariable("botonext", !validacion);
    }
    modificarVariable("botonprev", pagina <= 1);

    url = `https://rickandmortyapi.com/api/character/?page=${pagina}`;
    if (estadoseleccionado) url += `&status=${estadoseleccionado}`;
    if (terminoBusquedaActual) url += `&name=${terminoBusquedaActual}`;

    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
  }
}
