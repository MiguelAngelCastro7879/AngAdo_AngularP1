import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from '../../peticion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public usuarios: any = []
  constructor(private peticion: PeticionService, private router: Router) { }
  ngOnInit(): void {
    this.peticion.getAll().subscribe(
      respuesta=>{
        this.usuarios = respuesta.users
      });
    // console.log(this.usuarios)
  }
  leer(id:any){
    this.router.navigateByUrl('lista/'+id+'/detalles');
  }
}
