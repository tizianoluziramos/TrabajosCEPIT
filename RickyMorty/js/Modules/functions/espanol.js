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

export { espanol }