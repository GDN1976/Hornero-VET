// Archivo Menu.ts

import inquirer from 'inquirer'; // Importa el módulo inquirer para interactuar con el usuario a través de la consola
import { altaEntidad, modificarEntidad, bajaEntidad } from './Operaciones'; // Importa las funciones de operaciones
import { Veterinaria } from './Veterinaria'; // Importa la clase Veterinaria
import { Cliente } from './Cliente'; // Importa la clase Cliente
import { Paciente } from './Paciente'; // Importa la clase Paciente
import { Proveedor } from './Proveedor'; // Importa la clase Proveedor

// Función asíncrona para el menú de veterinarias
async function menuVeterinarias(): Promise<void> {
    let salir = false; // Variable para controlar la salida del menú
    while (!salir) {
        const { opcion } = await inquirer.prompt({
            type: 'list',
            name: 'opcion',
            message: 'Seleccione una opción:',
            choices: [
                'Alta Veterinaria',
                'Modificar Veterinaria',
                'Baja Veterinaria',
                'Volver'
            ]
        });

        switch (opcion) {
            case 'Alta Veterinaria':
                const { nombreVet, direccion } = await inquirer.prompt([
                    { type: 'input', name: 'nombreVet', message: 'Nombre:' },
                    { type: 'input', name: 'direccion', message: 'Dirección:' }
                ]);
                altaEntidad(new Veterinaria(nombreVet, direccion), 'veterinarias'); // Llama a la función para dar de alta una veterinaria
                break;
            case 'Modificar Veterinaria':
                const { idModVet, nuevoNombreVet, nuevaDireccionVet } = await inquirer.prompt([
                    { type: 'input', name: 'idModVet', message: 'ID:', validate: isValidNumber },
                    { type: 'input', name: 'nuevoNombreVet', message: 'Nuevo Nombre:' },
                    { type: 'input', name: 'nuevaDireccionVet', message: 'Nueva Dirección:' }
                ]);
                modificarEntidad(parseInt(idModVet, 10), { nombre: nuevoNombreVet, direccion: nuevaDireccionVet }, 'veterinarias'); // Llama a la función para modificar una veterinaria
                break;
            case 'Baja Veterinaria':
                const { idBajaVet } = await inquirer.prompt({
                    type: 'input',
                    name: 'idBajaVet',
                    message: 'ID:',
                    validate: isValidNumber
                });
                bajaEntidad(parseInt(idBajaVet, 10), 'veterinarias'); // Llama a la función para dar de baja una veterinaria
                break;
            case 'Volver':
                salir = true; // Cambia la variable para salir del menú
                break;
        }
    }
}

// Función asíncrona para el menú de clientes
async function menuClientes(): Promise<void> {
    let salir = false; // Variable para controlar la salida del menú
    while (!salir) {
        const { opcion } = await inquirer.prompt({
            type: 'list',
            name: 'opcion',
            message: 'Seleccione una opción:',
            choices: [
                'Alta Cliente',
                'Modificar Cliente',
                'Baja Cliente',
                'Volver'
            ]
        });

        switch (opcion) {
            case 'Alta Cliente':
                const { nombreCli, telefonoCli } = await inquirer.prompt([
                    { type: 'input', name: 'nombreCli', message: 'Nombre:' },
                    { type: 'input', name: 'telefonoCli', message: 'Teléfono:' }
                ]);
                altaEntidad(new Cliente(nombreCli, telefonoCli), 'clientes'); // Llama a la función para dar de alta un cliente
                break;
            case 'Modificar Cliente':
                const { idModCli, nuevoNombreCli, nuevoTelefonoCli } = await inquirer.prompt([
                    { type: 'input', name: 'idModCli', message: 'ID:', validate: isValidNumber },
                    { type: 'input', name: 'nuevoNombreCli', message: 'Nuevo Nombre:' },
                    { type: 'input', name: 'nuevoTelefonoCli', message: 'Nuevo Teléfono:' }
                ]);
                modificarEntidad(parseInt(idModCli, 10), { nombre: nuevoNombreCli, telefono: nuevoTelefonoCli }, 'clientes'); // Llama a la función para modificar un cliente
                break;
            case 'Baja Cliente':
                const { idBajaCli } = await inquirer.prompt({
                    type: 'input',
                    name: 'idBajaCli',
                    message: 'ID:',
                    validate: isValidNumber
                });
                bajaEntidad(parseInt(idBajaCli, 10), 'clientes'); // Llama a la función para dar de baja un cliente
                break;
            case 'Volver':
                salir = true; // Cambia la variable para salir del menú
                break;
        }
    }
}

// Función asíncrona para el menú de pacientes
async function menuPacientes(): Promise<void> {
    let salir = false; // Variable para controlar la salida del menú
    while (!salir) {
        const { opcion } = await inquirer.prompt({
            type: 'list',
            name: 'opcion',
            message: 'Seleccione una opción:',
            choices: [
                'Alta Paciente',
                'Modificar Paciente',
                'Baja Paciente',
                'Volver'
            ]
        });

        switch (opcion) {
            case 'Alta Paciente':
                const { nombrePac, especiePac } = await inquirer.prompt([
                    { type: 'input', name: 'nombrePac', message: 'Nombre:' },
                    { type: 'input', name: 'especiePac', message: 'Especie:' }
                ]);
                altaEntidad(new Paciente(nombrePac, especiePac), 'pacientes'); // Llama a la función para dar de alta un paciente
                break;
            case 'Modificar Paciente':
                const { idModPac, nuevoNombrePac, nuevaEspeciePac } = await inquirer.prompt([
                    { type: 'input', name: 'idModPac', message: 'ID:', validate: isValidNumber },
                    { type: 'input', name: 'nuevoNombrePac', message: 'Nuevo Nombre:' },
                    { type: 'input', name: 'nuevaEspeciePac', message: 'Nueva Especie:' }
                ]);
                modificarEntidad(parseInt(idModPac, 10), { nombre: nuevoNombrePac, especie: nuevaEspeciePac }, 'pacientes'); // Llama a la función para modificar un paciente
                break;
            case 'Baja Paciente':
                const { idBajaPac } = await inquirer.prompt({
                    type: 'input',
                    name: 'idBajaPac',
                    message: 'ID:',
                    validate: isValidNumber
                });
                bajaEntidad(parseInt(idBajaPac, 10), 'pacientes'); // Llama a la función para dar de baja un paciente
                break;
            case 'Volver':
                salir = true; // Cambia la variable para salir del menú
                break;
        }
    }
}