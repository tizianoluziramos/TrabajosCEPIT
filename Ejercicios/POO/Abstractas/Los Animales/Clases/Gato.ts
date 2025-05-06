import { Animal } from "./Animal";
import { MascotaConDueño } from "../Interfaces/MascotaConDueno";

export class Gato extends Animal implements MascotaConDueño {
  private colorPelaje: string;
  public nombreDueño: string;
  constructor(
    nombre: string,
    edad: number,
    colorPelaje: string,
    nombreDueño: string
  ) {
    super(nombre, edad);
    this.colorPelaje = colorPelaje;
    this.nombreDueño = nombreDueño;
  }

  public getPersonalInfo(): void {
    console.log(`Color pelaje: ${this.colorPelaje}`);
  }

  emitirSonido(): void {
    console.log("¡Miau!");
  }
}
