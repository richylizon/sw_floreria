import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { DescuentosComponent }  from './store/descuentos/descuentos.component';
import { ContactoComponent }  from './contacto/contacto.component';
const routes: Routes = [

    {path:'store', loadChildren: './store/store.module#StoreModule'},
    {path: 'sugerencias',component:SugerenciasComponent},   // './sugerencias/sugerencias.module#SugerenciasModule'}
    {path: 'descuentos',component:DescuentosComponent},
    {path: 'contacto',component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
