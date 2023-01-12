export interface Producto {
    id_producto: number;
    nombre_producto: string;
    valor_unitario: number;
    activo: boolean;
    fecha_creacion: Date;
    usuario_modificacion: number;
    cantidad: number;
}