import { Animal } from "./Animal";
import { MascotaConDueño } from "../Interfaces/MascotaConDueno";

export class Perro extends Animal implements MascotaConDueño {
    private raza: string;
    public nombreDueño: string;
    constructor(nombre: string, edad: number, raza: string, nombreDueño: string) {
      super(nombre, edad);
      this.nombreDueño = nombreDueño;
      this.raza = raza;
    }
  
  
    public getPersonalInfo(): void {
      console.log(`Raza: ${this.raza}`);
    }
  
    emitirSonido(): void {
      console.log("¡Guau guau!");
    }
  }