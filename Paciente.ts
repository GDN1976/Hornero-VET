// Archivo Paciente.ts

import { Entidad } from './Entidad'; // Importa la clase base abstracta Entidad

// Definición de la clase Paciente que extiende de Entidad
export class Paciente extends Entidad {
    especie: string; // Propiedad para almacenar la especie del paciente
    idDueno: number; // Propiedad para almacenar el ID del dueño del paciente

    // Constructor que inicializa las propiedades nombre, especie e idDueno
    constructor(nombre: string, especie: string, idDueno: number) {
        super(nombre); // Llama al constructor de la clase base Entidad
        this.especie = especie; // Asigna la especie proporcionada
        this.idDueno = idDueno; // Asigna el ID del dueño proporcionado
    }
}

