import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutesModule } from './router/routes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { JuegoComponent } from './componentes/juego/juego.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BindingComponent } from './componentes/binding/binding.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { NotificacionComponent } from './componentes/notificacion/notificacion.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    JuegoComponent,
    HomeComponent,
    FooterComponent,
    BindingComponent,
    ListaComponent,
    DetallesComponent,
    NotfoundComponent,
    NotificacionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutesModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
