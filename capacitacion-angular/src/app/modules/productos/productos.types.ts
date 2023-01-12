export interface Producto {
    id_producto: number;
    nombre_producto: string;
    valor_unitario: string;
    activo: boolean;
    fecha_creacion: Date;
    usuario_modificacion: number;
    cantidad: number;
}

export interface ProductoServiceT {
    id?: number; 
    nombre: string;
    valor: number;
    user: number;
    cantidad: number;
}