// Archivo Operaciones.ts

import { Entidad } from './Entidad'; // Importa la clase Entidad
import { readData, writeData } from './Data'; // Importa las funciones para leer y escribir datos

// Función para dar de alta una nueva entidad
export function altaEntidad<T extends Entidad>(entidad: T, tipo: string): void {
    const data = readData(); // Lee los datos existentes
    data[tipo].push(entidad); // Añade la nueva entidad al tipo correspondiente
    writeData(data); // Escribe los datos actualizados
    console.log(`${tipo.slice(0, -1)} dado de alta:`, entidad); // Muestra un mensaje de confirmación
}

// Función para modificar una entidad existente
export function modificarEntidad<T extends Entidad>(id: number, nuevosDatos: Partial<T>, tipo: string): void {
    const data = readData(); // Lee los datos existentes
    const entidad = data[tipo].find((e: T) => e.id === id); // Busca la entidad por su ID
    if (entidad) {
        Object.assign(entidad, nuevosDatos); // Asigna los nuevos datos a la entidad encontrada
        writeData(data); // Escribe los datos actualizados
        console.log(`${tipo.slice(0, -1)} modificado:`, entidad); // Muestra un mensaje de confirmación
    } else {
        console.log(`${tipo.slice(0, -1)} no encontrado`); // Muestra un mensaje si la entidad no se encuentra
    }
}

// Función para dar de baja una entidad existente
export function bajaEntidad<T extends Entidad>(id: number, tipo: string): void {
    const data = readData(); // Lee los datos existentes
    data[tipo] = data[tipo].filter((e: T) => e.id !== id); // Filtra la entidad por su ID para eliminarla
    writeData(data); // Escribe los datos actualizados
    console.log(`${tipo.slice(0, -1)} dado de baja`); // Muestra un mensaje de confirmación
}
