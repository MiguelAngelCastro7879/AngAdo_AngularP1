import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from '../componentes/formulario/formulario.component';
import { JuegoComponent } from '../componentes/juego/juego.component';
import { HomeComponent } from '../componentes/home/home.component';
import { BindingComponent } from '../componentes/binding/binding.component';
import { ListaComponent } from '../componentes/lista/lista.component';
import { DetallesComponent } from '../componentes/detalles/detalles.component';
import { NotfoundComponent } from '../componentes/notfound/notfound.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'juego', component: JuegoComponent},
  {path: 'adonisForm', component: FormularioComponent},
  {path: 'binding', component: BindingComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'lista/:id/detalles', component: DetallesComponent},
  {path: '**', component: NotfoundComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
