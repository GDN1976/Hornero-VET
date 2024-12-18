// Archivo Veterinaria.ts

import { Entidad } from './Entidad'; // Importa la clase base abstracta Entidad

// Definición de la clase Veterinaria que extiende de Entidad
export class Veterinaria extends Entidad {
    direccion: string; // Propiedad para almacenar la dirección de la veterinaria

    // Constructor que inicializa las propiedades nombre y dirección
    constructor(nombre: string, direccion: string) {
        super(nombre); // Llama al constructor de la clase base Entidad
        this.direccion = direccion; // Asigna la dirección proporcionada
    }
}

