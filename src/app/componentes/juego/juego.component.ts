import { Component, OnInit } from '@angular/core';

import {trigger,state,style,animate,transition,keyframes,useAnimation} from '@angular/animations';
import { transitionAnimation } from './animaciones';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
  animations: [
    trigger('viborita1', [
      state('inactive', style({
        width: '120px',
        height: '50px'
      })),
      state('active', style({
        width: '120px',
        height: '50px'
      })),
      transition("inactive => active", [
        animate(Math.random()*10 +  's 1s ease-in', keyframes([
          style({transform: "translateX(100%)", offset: 0.1}),
          style({transform: "translateX(200%)", offset: 0.2}),
          style({transform: "translateX(300%)", offset: 0.3}),
          style({transform: "translateX(400%)", offset: 0.4}),
          style({transform: "translateX(500%)", offset: 0.5}),
          style({transform: "translateX(600%)", offset: 0.6}),
          style({transform: "translateX(700%)", offset: 0.7}),
          style({transform: "translateX(800%)", offset: 0.8}),
          style({transform: "translateX(900%)", offset: 0.9}),
          style({transform: "translateX(1000%)", offset: 1.0}),
        ])
      ),
    ])
    ]),
    trigger('viborita2', [
      state('inactive', style({
        width: '120px',
        height: '50px'
      })),
      state('active', style({
        width: '120px',
        height: '50px'
      })),
      transition("inactive => active", [
        animate(Math.random()*10 +  's 1s ease-in', keyframes([
          style({transform: "translateX(100%)", offset: 0.1}),
          style({transform: "translateX(200%)", offset: 0.2}),
          style({transform: "translateX(300%)", offset: 0.3}),
          style({transform: "translateX(400%)", offset: 0.4}),
          style({transform: "translateX(500%)", offset: 0.5}),
          style({transform: "translateX(600%)", offset: 0.6}),
          style({transform: "translateX(700%)", offset: 0.7}),
          style({transform: "translateX(800%)", offset: 0.8}),
          style({transform: "translateX(900%)", offset: 0.9}),
          style({transform: "translateX(1000%)", offset: 1.0}),
        ])
      ),
    ])
    ]),
    trigger('viborita3', [
    state('inactive', style({
      width: '120px',
      height: '50px'
    })),
    state('active', style({
      width: '120px',
      height: '50px'
    })),
    transition("inactive => active", [
      animate(Math.random()*10 +  's 1s ease-in', keyframes([
        style({transform: "translateX(100%)", offset: 0.1}),
        style({transform: "translateX(200%)", offset: 0.2}),
        style({transform: "translateX(300%)", offset: 0.3}),
        style({transform: "translateX(400%)", offset: 0.4}),
        style({transform: "translateX(500%)", offset: 0.5}),
        style({transform: "translateX(600%)", offset: 0.6}),
        style({transform: "translateX(700%)", offset: 0.7}),
        style({transform: "translateX(800%)", offset: 0.8}),
        style({transform: "translateX(900%)", offset: 0.9}),
        style({transform: "translateX(1000%)", offset: 1.0}),
      ])
    ),
  ])
    ]),
    trigger('viborita4', [
  state('inactive', style({
    width: '120px',
    height: '50px'
  })),
  state('active', style({
    width: '120px',
    height: '50px'
  })),
  transition("inactive => active", [
    animate(Math.random()*10 + 's 1s ease-in', keyframes([
      style({transform: "translateX(100%)", offset: 0.1}),
      style({transform: "translateX(200%)", offset: 0.2}),
      style({transform: "translateX(300%)", offset: 0.3}),
      style({transform: "translateX(400%)", offset: 0.4}),
      style({transform: "translateX(500%)", offset: 0.5}),
      style({transform: "translateX(600%)", offset: 0.6}),
      style({transform: "translateX(700%)", offset: 0.7}),
      style({transform: "translateX(800%)", offset: 0.8}),
      style({transform: "translateX(900%)", offset: 0.9}),
      style({transform: "translateX(1000%)", offset: 1.0}),
    ])
  ),
])
    ]),
  ]
})
export class JuegoComponent implements OnInit {

  public estado = "inactive";
  constructor() {}

  ngOnInit(): void {
  }

  iniciar(){
    this.estado = this.estado === 'active' ? 'inactive' : 'active';
  }
}
