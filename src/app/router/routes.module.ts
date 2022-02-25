import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from '../componentes/formulario/formulario.component';
import { JuegoComponent } from '../componentes/juego/juego.component';
import { HomeComponent } from '../componentes/home/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'juego', component: JuegoComponent},
  {path: 'formulario', component: FormularioComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
