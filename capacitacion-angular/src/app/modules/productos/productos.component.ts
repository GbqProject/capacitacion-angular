import { Component, OnInit } from '@angular/core';
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

  dataSource: Observable<Producto[]> = this.productos$;

  ngOnInit():void {
    this.getProductos();
  }


  getProductos() {
    this.productos$ = this._ProductosService.productos$;

    this._ProductosService.getProductos().subscribe(
      res => {
        
      }
    );
  }

}


