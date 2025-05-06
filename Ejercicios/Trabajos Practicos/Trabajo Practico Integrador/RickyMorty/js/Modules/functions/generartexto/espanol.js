function espanol(personaje) {
  const estados = {
    unknown: "Desconocido",
    Dead: "Muerto",
    Alive: "Sigue vivo",
  };

  const generos = {
    Male: "Hombre",
    Female: "Mujer",
    Genderless: "Sin género",
    unknown: "Desconocido",
  };

  const especies = {
    Human: "Humano",
    Humanoid: "Humanoide",
    Alien: "Extraterrestre",
    Robot: "Robot",
    Cronenberg: "Cronenberg",
    Animal: "Animal",
    Disease: "Enfermedad",
    MythologicalCreature: "Criatura mitológica",
    Vampire: "Vampiro",
    Poopybutthole: "Poopybutthole",
    Insect: "Insecto",
    unknown: "Desconocido",
  };

  const tipos = {
    Parasite: "Parásito",
    Superhuman: "Superhumano",
    Clone: "Clon",
    "Genetic experiment": "Experimento genético",
    Disease: "Enfermedad",
    Robot: "Robot",
    "Time God": "Dios del tiempo",
    "Self-aware arm": "Brazo consciente",
    "Sentient ant colony": "Colonia de hormigas consciente",
    "": "Desconocido",
  };

  function traducirLugar(nombre) {
    if (nombre === "unknown") return "Desconocido";
    if (nombre === "Earth (Replacement Dimension)")
      return "Tierra (Dimensión de reemplazo)";
    if (nombre === "Earth (C-137)") return "Tierra (C-137)";
    if (nombre.startsWith("Earth")) return nombre.replace("Earth", "Tierra");
    return nombre;
  }

  personaje.status = estados[personaje.status] || personaje.status;
  personaje.gender = generos[personaje.gender] || personaje.gender;
  personaje.species = especies[personaje.species] || personaje.species;
  personaje.type = tipos[personaje.type] || personaje.type || "Desconocido";

  if (personaje.origin && personaje.origin.name) {
    personaje.origin.name = traducirLugar(personaje.origin.name);
  }

  if (personaje.location && personaje.location.name) {
    personaje.location.name = traducirLugar(personaje.location.name);
  }

  return personaje;
}

export { espanol };