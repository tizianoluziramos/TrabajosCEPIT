import { Animal } from "./Animal";
import { MascotaConDueño } from "../Interfaces/MascotaConDueno";

export class Pez extends Animal implements MascotaConDueño {
  private tipoAgua: string;
  public nombreDueño: string;
  constructor(
    nombre: string,
    edad: number,
    nombreDueño: string,
    tipoAgua: string
  ) {
    super(nombre, edad);
    this.nombreDueño = nombreDueño;
    this.tipoAgua = tipoAgua;
  }

  emitirSonido(): void {
    console.log("Glub glub");
  }

  public getPersonalInfo(): void {
    console.log(`El tipo de agua del pez es: ${this.tipoAgua}`);
  }
}
