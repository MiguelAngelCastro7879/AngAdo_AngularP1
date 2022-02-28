import { Component, OnInit } from '@angular/core';

import {trigger,state,style,animate,transition,keyframes,useAnimation} from '@angular/animations';
import { transitionAnimation } from './animaciones';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
  animations: [
    trigger('botonAnimacion', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#ff0000',
        transform: 'scale(1.5)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'),
      ),
    ]),
    trigger('EstilosIntermediosAnimacion', [
      state('inactive', style({
        backgroundColor: 'red',
        width: '100px',
        height: '100px'
      })),
      state('active', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
      })),
      transition('inactive => active',[
      animate(1000, style({backgroundColor: 'blue'})),
      animate(500, style({width: '150px'})),
      animate(1500, style({height: '150px'}))
    ]
      ),
      transition('active => inactive', [
        animate(1000, style({backgroundColor: 'red'})),
        animate(500, style({width: '100px'})),
        animate(1500, style({height: '100px'}))
      ])
    ]),
    trigger("cuadroAnimacion", [
      state("inicio-1", style({
        width: '100px',
      })),
      state("inicio-2", style({
        width: '100px',
      })),
      state("fin", style({
        width: '300px',
      })),
      transition("inicio-1 => fin", [
        animate('1000ms 1s ease-out')
      ]),
      transition("inicio-2 => fin", [
        animate('1s 1.5s ease-in', keyframes([
          style({width: '100px', offset: 0}),
          style({width: '50px', offset: 0.45}),
          style({width: '400px', offset: 0.55}),
          style({width: '350px', offset: 1})
        ]))
      ]),
    ]),
    trigger("reutilizarAnimacion", [
      state("reu-1", style({
        width: '100px',
      })),
      state("fin", style({
        width: '300px',
      })),
      transition("reu-1 => fin", [
        useAnimation(transitionAnimation, {
          params: {
            opacity: 1,
            backgroundColor: 'red',
            time: '1s'
          }
        })
      ])
    ])
  ]
})
export class JuegoComponent implements OnInit {
  public estadoBotonAnimacion = "inactive";
  public estadoEstilosIntermedio = "inactive";
  public estadoCuadro1 = "inicio-1";
  public estadoCuadro2 = "inicio-2";
  public estadoReutilizarAnimacion = 'reu-1';

  constructor() {}

  ngOnInit(): void {
  }

  BotonAnimacion(){
    this.estadoBotonAnimacion = this.estadoBotonAnimacion === 'active' ? 'inactive' : 'active';
  }

  EstilosIntermedios(){
    this.estadoEstilosIntermedio = this.estadoEstilosIntermedio === 'active' ? 'inactive' : 'active';
  }

  RetrasoYModoAnimacion(){
    this.estadoCuadro1 = this.estadoCuadro1 === 'inicio-1' ? 'fin' : 'inicio-1';
    this.estadoCuadro2 = this.estadoCuadro2 === 'inicio-2' ? 'fin' : 'inicio-2';
  }

  reutilizarAnimacion(){
    this.estadoReutilizarAnimacion = this.estadoReutilizarAnimacion === 'reu-1' ? 'fin' : 'reu-1';
  }
}
