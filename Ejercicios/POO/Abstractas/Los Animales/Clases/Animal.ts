import { AnimalDomestico } from "../Interfaces/AnimalDomestico";
export abstract class Animal implements AnimalDomestico {
  public nombre: string;
  private edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  public get get_nombre(): string {
    return this.nombre;
  }

  public get get_edad(): number {
    return this.edad;
  }

  abstract emitirSonido(): void;
}
