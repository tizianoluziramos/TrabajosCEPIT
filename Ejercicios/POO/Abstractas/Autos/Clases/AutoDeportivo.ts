import { Auto } from "./Auto";

export class AutoDeportivo extends Auto {
  public frenar(): void {
    const intervalo = setInterval(() => {
      if (this.velocidadActual <= 0) {
        this.velocidadActual = 0;
        clearInterval(intervalo);
      } else {
        this.velocidadActual -= 3;
        if (this.velocidadActual < 0) {
          this.velocidadActual = 0;
        }
        console.log("Frenando: " + this.velocidadActual);
      }
    }, 100);
  }

  public acelerar(): void {
    const intervalo = setInterval(() => {
      if (this.velocidadActual + 3 >= this.velocidadMaxima) {
        this.velocidadActual = this.velocidadMaxima;
        console.log("Acelerando: " + this.velocidadActual);
        clearInterval(intervalo);
      } else {
        this.velocidadActual += 10;
        console.log("Acelerando: " + this.velocidadActual);
      }
    }, 300);
  }
}
