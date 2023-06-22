import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.page.html',
  styleUrls: ['./multiplicacion.page.scss'],
})
export class MultiplicacionPage implements OnInit {

  numero!: number;
  rango: number[] = [];

  tablaA(){
    this.rango = [];
    for(let e = 1; e <= 14; e++ ){
      this.rango.push(e);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
