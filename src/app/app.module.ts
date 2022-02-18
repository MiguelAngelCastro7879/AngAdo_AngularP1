import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PeticionService } from './peticion.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BotonComponent } from './boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PeticionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
