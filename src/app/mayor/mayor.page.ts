import { Component} from '@angular/core';

@Component({
  selector: 'app-mayor',
  templateUrl: './mayor.page.html',
  styleUrls: ['./mayor.page.scss'],
})
export class MayorPage {

  num1!: number;
  num2!: number;
  resultado!: number|null;

  comparar(){ 
    if(this.num1 > this.num2) {
      this.resultado = this.num1 ;
    } else if (this.num2 > this.num1) {
      this.resultado = this.num2 ;
    } else {
      this.resultado = null;
    }
  }

 

}
