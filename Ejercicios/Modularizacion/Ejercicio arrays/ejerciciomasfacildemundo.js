import { Buffer } from 'buffer'

function usarMemoriaGB() {
  const buffer = Buffer.alloc(1024 * 1024 * 1024); // Crea un buffer de 1 GB
  console.log("1 GB de memoria asignado");
  // Dejar el buffer en memoria para que no sea recolectado por el GC
  return buffer;
}

// Llamar a la función
const buffer1GB = usarMemoriaGB();