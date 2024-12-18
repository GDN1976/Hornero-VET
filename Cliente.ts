// Archivo Cliente.ts

import { Entidad } from './Entidad';

export class Cliente extends Entidad {
    telefono: string;
    esVIP: boolean;
    visitas: number;

    constructor(nombre: string, telefono: string, visitas: number = 0) {
        super(nombre);
        this.telefono = telefono;
        this.visitas = visitas;
        this.esVIP = visitas >= 5;
    }
}
