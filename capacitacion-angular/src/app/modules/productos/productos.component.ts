import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{
  constructor(private _ProductosService: ProductosService){}

  ngOnInit():void {
    this.getProductos();
  }


  getProductos() {
    this._ProductosService.getProductos().subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
