import { Perro } from "./Clases/Perro";
import { Pez } from "./Clases/Pez";
import { Gato } from "./Clases/Gato";

const perro1 = new Perro("Firulais", 4, "Labrador", "Carlos Pérez");
const perro2 = new Perro("Max", 2, "Bulldog Francés", "Ana Torres");

const pez1 = new Pez("Nemo", 1, "Laura Ríos", "Agua salada");
const pez2 = new Pez("Bubbles", 2, "Carlos Méndez", "Agua dulce");

const gato1 = new Gato("Michi", 3, "Blanco con negro", "Laura Vargas");
const gato2 = new Gato("Garfield", 5, "Naranja", "Pedro Salinas");

const mascotas = [perro1, perro2, pez1, pez2, gato1, gato2];

mascotas.forEach((mascota) => {
  console.log(`Nombre: ${mascota.get_nombre}, Edad: ${mascota.get_nombre}, Dueño: ${mascota.nombreDueño}`);
  mascota.emitirSonido();
  mascota.getPersonalInfo();
  console.log("--------------");
});