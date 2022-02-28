import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  Nombre = "Maicol Jackson";
  Edad = "24";
  Estado = "Comprometido";
  Universidad = "Universidad Tecnologica De Torreon";

  constructor() { }

  ngOnInit(): void {
  }
}
