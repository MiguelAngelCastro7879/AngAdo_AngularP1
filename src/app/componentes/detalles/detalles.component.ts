import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionService } from 'src/app/peticion.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { User3 } from 'src/app/Models/usuarios.response';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  animations: [
    trigger("ArribaAbajo", [
      state("void", style({
        transform: "translateY(-100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateY(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("AbajoArriba", [
      state("void", style({
        transform: "translateY(+100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateY(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("IzquierdaDerecha", [
      state("void", style({
        transform: "translateX(-100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateX(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("DerechaIzquierda", [
      state("void", style({
        transform: "translateX(+100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateX(0)",
          opacity:1
        }))
      ])
    ]),
  ],
})
export class DetallesComponent implements OnInit {
  id = 0
  public usuario: User3 = {
    name:'',
    email:'',
    username:''
  }
  error = false
  actualizar = false
  constructor(private peticion: PeticionService, private router: Router,private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params=>{
        this.getUser(params['id'])
      }
    )

  }

  getUser(id: any){
    this.id= id
    this.peticion.getOne(id).subscribe(
      respuesta=>{
        this.usuario = respuesta.user
      })
  }
  eliminar(){
    this.peticion.delete(this.id).subscribe(
      respuesta=>{
        if(respuesta.mensaje == 'Usuario Eliminado'){
          this.usuario = respuesta.user
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/lista')
        }else{
          this.error = true
        }
      })
  }

  modificar(){
    this.peticion.update(this.id,this.usuario).subscribe(
      respuesta=>{
        if(respuesta.mensaje == 'Usuario Actualizado'){
          this.usuario = respuesta.user
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/lista')
        }else{
          this.error = true
        }
      })

  }
  inputs(){
    this.actualizar = !this.actualizar
  }
  ngOnInit(): void {
  }



}
