// Archivo Proveedor.ts

import { Entidad } from './Entidad';

export class Proveedor extends Entidad {
    telefono: string;

    constructor(nombre: string, telefono: string) {
        super(nombre);
        this.telefono = telefono;
    }
}
