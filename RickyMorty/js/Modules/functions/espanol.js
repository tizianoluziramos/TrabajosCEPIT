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
  } else if (personaje.gender === "unknown") {
    personaje.gender = "Desconocido";
  }
  if (personaje.origin.name === "unknown") {
    personaje.origin.name = "Desconocido";
  } else if (personaje.origin.name === "Earth (Replacement Dimension)") {
    personaje.origin.name = "Tierra (Dimension de remplazo)";
  } else if (personaje.origin.name.startsWith("Earth")) {
    personaje.origin.name = personaje.origin.name.replace("Earth", "Tierra");
  }
  if (personaje.species === "Human") {
    personaje.species = "Humano";
  } else if (personaje.species === "Humanoid") {
    personaje.species = "Humanoide";
  } else if (personaje.species === "unknown") {
    personaje.species = "Desconocido";
  }
  return personaje;
}

export { espanol };
