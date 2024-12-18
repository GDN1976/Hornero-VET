// Archivo Entidad.ts

// Definición de una clase abstracta llamada Entidad
export abstract class Entidad {
    id: number; // Propiedad para almacenar el ID único de la entidad
    nombre: string; // Propiedad para almacenar el nombre de la entidad

    // Constructor que inicializa la propiedad nombre y asigna un ID único
    constructor(nombre: string) {
        this.id = Entidad.generateUniqueId(); // Genera y asigna un ID único
        this.nombre = nombre; // Asigna el nombre proporcionado
    }

    // Método estático para generar un ID único
    static generateUniqueId(): number {
        const existingIds = Entidad.getExistingIds(); // Obtiene los IDs existentes
        let id: number;
        do {
            id = Math.floor(Math.random() * 1000000); // Genera un ID aleatorio
        } while (existingIds.includes(id)); // Repite si el ID ya existe
        return id; // Retorna el ID único generado
    }

    // Método estático para obtener los IDs existentes de varias entidades
    static getExistingIds(): number[] {
        const data = readData(); // Lee los datos de alguna fuente
        return [
            ...data.veterinarias.map((v: Veterinaria) => v.id), // IDs de veterinarias
            ...data.clientes.map((c: Cliente) => c.id), // IDs de clientes
            ...data.pacientes.map((p: Paciente) => p.id), // IDs de pacientes
            ...data.proveedores.map((p: Proveedor) => p.id) // IDs de proveedores
        ];
    }
}

