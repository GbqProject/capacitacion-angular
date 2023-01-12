import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos.routing';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './productos.service';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [
    
  ],
  providers: [
    ProductosService
  ]
})
export class ProductosModule { }
