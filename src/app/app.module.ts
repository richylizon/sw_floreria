import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { environment } from 'src/environments/environment';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductosService } from './store/productos.service';
import { SugerenciasService } from './sugerencias.service';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { DescuentosComponent } from './store/descuentos/descuentos.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [AppComponent, ProductSearchComponent, SugerenciasComponent, DescuentosComponent, ContactoComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    LayoutModule,
    HttpModule
  ],
  providers: [ProductosService,SugerenciasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
