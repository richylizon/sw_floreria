import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';

const routes: Routes = [

    {path:'store', loadChildren: './store/store.module#StoreModule'},
    {path: 'sugerencias',component:SugerenciasComponent}   // './sugerencias/sugerencias.module#SugerenciasModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
