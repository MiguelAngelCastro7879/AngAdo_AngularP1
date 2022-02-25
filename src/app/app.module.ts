import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutesModule } from './router/routes.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { JuegoComponent } from './componentes/juego/juego.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    JuegoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutesModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
