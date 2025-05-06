import { Telefono } from "./Telefono";

export class SmartPhone implements Telefono {
  private estaPrendido: boolean = false;
  public prender(): void {
    if (!this.estaPrendido) {
      this.estaPrendido = true;
    }
  }
  public apagar(): void {
    if (this.estaPrendido) {
      this.estaPrendido = false;
    }
  }
  public llamar(numero: string): void {
    if (this.estaPrendido) {
      console.log(`Llamando a ${numero}`);
    }
  }
  public sacarFoto(): void {
    if (this.estaPrendido) {
      console.log(`Sacando foto`);
    }
  }
}
