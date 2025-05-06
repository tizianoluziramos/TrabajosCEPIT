export abstract class Auto {
  public velocidadMaxima: number;
  public velocidadActual: number = 0;
  public estaEncendido: boolean = false;
  public peso: number;
  public marca: string;
  public modelo: string;

  constructor(
    velocidadMaxima: number,
    peso: number,
    marca: string,
    modelo: string
  ) {
    this.velocidadMaxima = velocidadMaxima;
    if (peso <= 0) {
      this.peso = 1;
    } else {
      this.peso = peso;
    }
    this.marca = marca;
    this.modelo = modelo;
  }

  abstract acelerar(): void;

  abstract frenar(): void;

  public switchEncender(): void {
    if (this.estaEncendido) {
      this.estaEncendido = false;
    } else {
      this.estaEncendido = true;
      console.log(`Auto encendido con exito.`);
    }
  }

  public getInfo(): void {
    if (this.estaEncendido) {
      console.log(`Velocidad actual: ${this.velocidadActual}`);
    }
    console.log(`Velocidad maxima: ${this.velocidadMaxima}`);
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
  }
}
