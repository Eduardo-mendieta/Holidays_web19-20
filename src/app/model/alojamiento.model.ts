import { Usuario } from './usuario.model';
import { Ciudad } from './ciudad.model';
import { TipoVivienda } from './tipo-vivienda.model';
import { ImagenAlojamiento } from './imagen-alojamiento.model';
export class Alojamiento {
    id?: number;
    descripcion: string;
    ubicacion: string;
    condicionesUso: string;
    servicios: string;
    numeroHuespedes: number;
    numeroCamas: number;
    numeroBanos: number;
    numeroHabitaciones: number;
    precioPorNoche: number;
    disponible: boolean;
    usuario: Usuario;
    ciudad: Ciudad;
    tVivienda: TipoVivienda;
}
