const contenedor = document.getElementById("results-container");
let pagina = 1;
let estadoseleccionado = null;
let botonext = document.getElementById("siguiente");
let botonprev = document.getElementById("previo");
const searchbuttom = document.getElementById("buscar");
const busqueda = document.getElementById("busqueda");
botonprev.disabled = true;
const statusaliveboton = document.getElementById("statusalive");
const statusdeadboton = document.getElementById("statusdead");
const statusunknownboton = document.getElementById("statusunknown");
const clearfilterboton = document.getElementById("clearfilter");

async function verificarDatosNull(pagina, estado = null) {
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

async function obtenerPersonajes(a) {
  try {
    let validacion = await verificarDatosNull(pagina, estadoseleccionado);

    if (a === "previo") {
      if (pagina > 1) {
        pagina--;
        validacion = await verificarDatosNull(pagina, estadoseleccionado);
        if (!validacion) {
          botonext.disabled = false;
        }
      }
    }

    if (a === "siguiente" && validacion === true) {
      pagina++;
      validacion = await verificarDatosNull(pagina, estadoseleccionado);
      if (!validacion) {
        botonext.disabled = true;
      }
    }

    if (pagina > 1) {
      botonprev.disabled = false;
    } else {
      botonprev.disabled = true;
    }

    let url = `https://rickandmortyapi.com/api/character/?page=${pagina}`;
    if (estadoseleccionado) {
      url += `&status=${estadoseleccionado}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
  }
}

function espanol(personaje) {
  if (personaje.status === "unknown") {
    personaje.status = "Desconocido";
  } else if (personaje.status === "Dead") {
    personaje.status = "Muerto";
  } else if (personaje.status === "Alive") {
    personaje.status = "Sigue vivo";
  }
  if (personaje.gender === "Male") {
    personaje.gender = "Hombre";
  } else if (personaje.gender === "Female") {
    personaje.gender = "Mujer";
  }
  if (personaje.origin.name === "unknown") {
    personaje.origin.name = "Desconocido";
  } else if (personaje.origin.name.startsWith("Earth")) {
    personaje.origin.name = personaje.origin.name.replace("Earth", "Tierra");
  }
  return personaje;
}

function generarParrafoPersonaje(personaje) {
  return `
    <p><strong>Nombre:</strong> ${personaje.name}</p>
    <p><strong>Estado:</strong> ${personaje.status}</p>
    <p><strong>Especie:</strong> ${personaje.species}</p>
    <p><strong>Género:</strong> ${personaje.gender}</p>
    <p><strong>Origen:</strong> ${personaje.origin.name}</p>
    <p><strong>Ubicación:</strong> ${personaje.location.name}</p>
  `;
}

function crearVentanaEmergente(personaje) {
  const ventanaExistente = document.getElementById("ventana-emergente");
  if (ventanaExistente) {
    console.log("Ya hay una ventana emergente abierta.");
    return;
  }

  const ventana = document.createElement("div");
  ventana.id = "ventana-emergente";
  ventana.style.position = "fixed";
  ventana.style.top = "50%";
  ventana.style.left = "50%";
  ventana.style.transform = "translate(-50%, -50%)";
  ventana.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  ventana.style.color = "#fff";
  ventana.style.padding = "20px";
  ventana.style.borderRadius = "10px";
  ventana.style.zIndex = "1000";
  ventana.style.maxWidth = "400px";
  ventana.style.width = "80%";

  const cerrar = document.createElement("span");
  cerrar.innerHTML = "X";
  cerrar.style.position = "absolute";
  cerrar.style.top = "10px";
  cerrar.style.right = "10px";
  cerrar.style.cursor = "pointer";
  cerrar.style.fontSize = "20px";
  cerrar.style.fontWeight = "bold";
  cerrar.style.color = "#fff";

  cerrar.addEventListener("click", function () {
    cerrarVentana(ventana);
  });

  ventana.innerHTML = `
    <div>
      <h2>Detalles de ${personaje.name}</h2>
      ${generarParrafoPersonaje(personaje)}
    </div>
  `;

  ventana.appendChild(cerrar);

  document.body.appendChild(ventana);
}

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

async function mostrarDetallePersonaje(id) {
  const personaje = await obtenerDetallePersonaje(id);
  if (personaje) {
    crearVentanaEmergente(personaje);
  }
}

function cerrarVentana() {
  const ventana = document.getElementById("ventana-emergente");
  if (ventana) {
    ventana.remove();
  }
}

function eliminarResultados() {
  const listItems = contenedor.querySelectorAll("li");
  listItems.forEach((li) => {
    li.remove();
  });
}

async function mostrarPersonaje(request = undefined, status = 0) {
  if (status === 3) {
    obtenerPersonajes(request, 3).then((personajes) => {
      if (personajes) {
        personajes.forEach((personaje) => {
          const li = document.createElement("li");
          espanol(personaje);
          li.innerHTML = `
            <div class="result" onclick="mostrarDetallePersonaje(${personaje.id})">
              <img src="${personaje.image}" alt="Imagen de ${personaje.name}">
              <p>Nombre: ${personaje.name}</p>
              <p>Estado: ${personaje.status}</p>
            </div>
          `;
          contenedor.appendChild(li);
        });
      }
    });
  }
  if (status === 2) {
    obtenerPersonajes(request, 2).then((personajes) => {
      if (personajes) {
        personajes.forEach((personaje) => {
          const li = document.createElement("li");
          espanol(personaje);
          li.innerHTML = `
            <div class="result" onclick="mostrarDetallePersonaje(${personaje.id})">
              <img src="${personaje.image}" alt="Imagen de ${personaje.name}">
              <p>Nombre: ${personaje.name}</p>
              <p>Estado: ${personaje.status}</p>
            </div>
          `;
          contenedor.appendChild(li);
        });
      }
    });
  }
  if (status === 0) {
    obtenerPersonajes(request).then((personajes) => {
      if (personajes) {
        personajes.forEach((personaje) => {
          const li = document.createElement("li");
          espanol(personaje);
          li.innerHTML = `
            <div class="result" onclick="mostrarDetallePersonaje(${personaje.id})">
              <img src="${personaje.image}" alt="Imagen de ${personaje.name}">
              <p>Nombre: ${personaje.name}</p>
              <p>Estado: ${personaje.status}</p>
            </div>
          `;
          contenedor.appendChild(li);
        });
      }
    });
  }
  if (status === 1) {
    obtenerPersonajes(request, 1).then((personajes) => {
      if (personajes) {
        personajes.forEach((personaje) => {
          const li = document.createElement("li");
          espanol(personaje);
          li.innerHTML = `
            <div class="result" onclick="mostrarDetallePersonaje(${personaje.id})">
              <img src="${personaje.image}" alt="Imagen de ${personaje.name}">
              <p>Nombre: ${personaje.name}</p>
              <p>Estado: ${personaje.status}</p>
            </div>
          `;
          contenedor.appendChild(li);
        });
      }
    });
  }
}

function main() {
  mostrarPersonaje();

  clearfilterboton.addEventListener("click", () => {
    estadoseleccionado = null;
    pagina = 1;
    eliminarResultados();
    mostrarPersonaje();
  });

  statusaliveboton.addEventListener("click", () => {
    estadoseleccionado = "Alive";
    pagina = 1;
    eliminarResultados();
    mostrarPersonaje("", 1);
  });

  statusunknownboton.addEventListener("click", () => {
    estadoseleccionado = "Unknown";
    pagina = 1;
    eliminarResultados();
    mostrarPersonaje("", 3);
  });

  statusdeadboton.addEventListener("click", () => {
    estadoseleccionado = "Dead";
    pagina = 1;
    eliminarResultados();
    mostrarPersonaje("", 2);
  });

  botonext.addEventListener("click", () => {
    eliminarResultados();
    mostrarPersonaje("siguiente");
  });

  botonprev.addEventListener("click", () => {
    eliminarResultados();
    mostrarPersonaje("previo");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  main();
  var f = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

  function loop() {
    location.hash = f[Math.floor((Date.now() / 100) % f.length)];

    setTimeout(loop, 50);
  }
  loop();
});
