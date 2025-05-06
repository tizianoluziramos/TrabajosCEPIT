export async function verificarDatosNull(pagina, estado = null) {
  try {
    let url = `https://rickandmortyapi.com/api/character/?page=${pagina}`;
    if (estado) {
      url += `&status=${estado}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data.info.next !== null;
  } catch (error) {
    console.error(error);
    return false;
  }
}