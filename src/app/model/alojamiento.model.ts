<<<<<<< HEAD
=======
import { Usuario } from './usuario.model';
import { Ciudad } from './ciudad.model';
import { TipoVivienda } from './tipo-vivienda.model';
import { ImagenAlojamiento } from './imagen-alojamiento.model';
>>>>>>> f034fe761dab19751688d2db76bc043f578108d6
export class Alojamiento {
    id?: number;
    descripcion: string;
    ubicacion: string;
    condicionesUso: string;
    servicios: string;
    numeroHuespedes: number;
    numeroCamas: number;
    numeroBaños: number;
    numeroHabitaciones: number;
    precioPorNoche: number;
    disponible: boolean;
<<<<<<< HEAD
=======
    usuario: Usuario;
    ciudad: Ciudad;
    tVivienda: TipoVivienda;
>>>>>>> f034fe761dab19751688d2db76bc043f578108d6
}
