import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../peticion.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  constructor(private peticion: PeticionService) { }

  ngOnInit(): void {
  }
  mandarSolicitud(){
    this.peticion.mandarPeticion().subscribe(
      respuesta=>{
        console.log(respuesta)
      });
  }

}
