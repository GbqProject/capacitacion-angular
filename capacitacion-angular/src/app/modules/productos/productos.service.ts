import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/environment/environment';
import { BehaviorSubject, Observable, tap, switchMap, take, map } from 'rxjs';
import { Producto, ProductoServiceT } from './productos.types';
import { ApiResponseCustom } from 'src/app/models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private _httpCliente: HttpClient) { }
  private initialProduct: Producto[] = [];

  private _productos: BehaviorSubject<Producto[]> = new BehaviorSubject(this.initialProduct);

  get productos$(): Observable<Producto[]>
  {
      return this._productos.asObservable();
  }

  getProductos(): Observable<ApiResponseCustom> {
    return this._httpCliente.get<ApiResponseCustom>(`${env.backend}/productos/listProductos`).pipe(
      tap((res) => {
        this._productos.next(res.data);
      }
      )
    )
  }

  insertProducto(info: ProductoServiceT): Observable<any> {
    return this._httpCliente.post(`${env.backend}/productos/insertProducto`, info).pipe(
      tap((res) => {
        
      }
      )
    )
  }

  updateProducto(info: ProductoServiceT): Observable<any> {
    return this._httpCliente.patch(`${env.backend}/productos/updateProducto`, info).pipe(
      tap((res) => {
        
      }
      )
    )
  }

}
