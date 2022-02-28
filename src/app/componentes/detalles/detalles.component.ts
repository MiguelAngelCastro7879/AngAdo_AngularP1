import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from 'src/app/peticion.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  public usuario: any = {}
  constructor(private peticion: PeticionService,private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params=>{
        this.getUser(params['id'])
      }
    )

  }

  getUser(id: any){
    this.peticion.getOne(id).subscribe(
      respuesta=>{
        console.log(respuesta)
        this.usuario = respuesta.user
      })
  }
  ngOnInit(): void {
  }

}
