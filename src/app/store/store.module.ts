import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductosService } from './productos.service';

@NgModule({
  declarations: [StoreComponent, CatalogComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  providers:[ProductosService]
})
export class StoreModule { }
