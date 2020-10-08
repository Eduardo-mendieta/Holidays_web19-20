import { Alojamiento } from './alojamiento.model';
export class ImagenAlojamiento {
    id?: number;
    nombre: string;
    imagenUrl: string;
    cloudinaryImgId: string;
    alojamiento: Alojamiento;
}