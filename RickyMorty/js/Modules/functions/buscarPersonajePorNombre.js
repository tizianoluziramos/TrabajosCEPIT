const contenedor = document.getElementById("results-container");

export async function buscarPersonajePorNombre(nombre) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${nombre}`
    );
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      alert(`No se encontró ningún personaje con el nombre "${nombre}".`);
      return;
    }

    contenedor.innerHTML = "";

    data.results.forEach((personaje) => {
      const personajeHTML = `
              <div class="personaje-info" onclick="mostrarDetallePersonaje(${personaje.id})">
                <img src="${personaje.image}" alt="imagen de ${personaje.name}" class="personaje-imagen" />
                <h2>${personaje.name}</h2>
                <p><strong>Estado:</strong> ${personaje.status}</p>
                <p><strong>Especie:</strong> ${personaje.species}</p>
                <p><strong>Género:</strong> ${personaje.gender}</p>
                <p><strong>Origen:</strong> ${personaje.origin.name}</p>
                <p><strong>Ubicación:</strong> ${personaje.location.name}</p>
              </div>
            `;
      contenedor.innerHTML += personajeHTML;
    });
  } catch (error) {
    console.error("Error al buscar el personaje:", error);
    alert(`Ocurrió un error al intentar buscar el personaje "${nombre}".`);
  }
}
