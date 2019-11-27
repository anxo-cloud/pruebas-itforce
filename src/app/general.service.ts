import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private fb: FormBuilder) { }
  dniArr=[];
  show (){
    console.log('hola soy un servicio!!!');
  }
  enviar(val){
    this.dniArr.push(val);
    console.log(this.dniArr);
  }


  // pushElement(){

  // }
}
