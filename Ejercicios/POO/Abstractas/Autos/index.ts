import { Camioneta } from "./Clases/Camioneta";
import { AutoCiudad } from "./Clases/AutoCiudad";
import { AutoDeportivo } from "./Clases/AutoDeportivo";

let Camioneta1 = new Camioneta(140, 200, "Ford", "F~1");

let AutoCiudad1 = new AutoCiudad(200, 200, "A", "A");

let AutoDeportiv1 = new AutoDeportivo(300, 20, "Ford", "F~2");

// Aclaracion: Cuando vos ejecutas el metodo frenar o acelerar en multiples instancias a la vez
// De estos objetos, como el setInterval es un bloqueante
// Se mostraran la cantidad de kmh acelerados al mismo tiempo
// Provocando que genere confusion.
// Recomendacion: proba uno a uno dale que no quiero usar Returntype que no lo vimos

AutoCiudad1.switchEncender();
AutoCiudad1.acelerar();

Camioneta1.switchEncender();
Camioneta1.acelerar();

AutoDeportiv1.switchEncender();
AutoCiudad1.acelerar();