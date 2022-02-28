import { animation, style, animate, keyframes } from '@angular/animations';

export const transitionAnimation = animation([
  style({
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('1s 1.5s ease-in', keyframes([
    style({width: '100px', offset: 0}),
    style({width: '50px', offset: 0.45}),
    style({width: '400px', offset: 0.55}),
    style({width: '350px', offset: 1})
  ]))
]);
