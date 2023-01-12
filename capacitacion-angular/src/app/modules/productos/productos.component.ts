import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductosService } from './productos.service';
import { Producto } from './productos.types';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{
  constructor(private _ProductosService: ProductosService){}
  productos$: Observable<Producto[]> = new Observable();

  displayedColumns: string[] = ['id_producto', 'nombre_producto', 'valor_unitario', 'cantidad', 'acciones'];
  idProducto: number = 0;
  nombreProducto: FormControl = new FormControl('');
  valorProducto: FormControl = new FormControl('');
  cantidadProducto: FormControl = new FormControl('');

  ngOnInit():void {
    this.getProductos();
  }


  getProductos():void {
    this.productos$ = this._ProductosService.productos$;

    this._ProductosService.getProductos().subscribe(
      res => {
        
      }
    );
  }

  editProduct(element: Producto):void {
    this.idProducto = element.id_producto;
    this.nombreProducto.setValue(element.nombre_producto);
    this.valorProducto.setValue(element.valor_unitario.slice(1));
    this.cantidadProducto.setValue(element.cantidad);
  }

  limpiarForm():void {
    this.idProducto = 0;
    this.nombreProducto.setValue('');
    this.valorProducto.setValue('');
    this.cantidadProducto.setValue('');
  }

  serviceProduct():void {
    const info = {
      id: 0,
      nombre: this.nombreProducto.value,
      valor: this.valorProducto.value,
      user: 1,
      cantidad: this.cantidadProducto.value,
    }
    if(this.idProducto) {
      info.id = this.idProducto;
      this._ProductosService.insertProducto(info).subscribe(res => {
        this.getProductos();
      });
    } else {
      this._ProductosService.insertProducto(info).subscribe(res => {
        this.getProductos();
      });
    }
  }

}


