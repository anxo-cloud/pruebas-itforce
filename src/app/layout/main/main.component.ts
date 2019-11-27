import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';
import { NgClass } from '@angular/common';
import { FormBuilder,Validators } from '@angular/forms';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title= "hola desde el main";
  myNumber : number=1;
  claseTitular: string ="clase1";
  burroDeCarga='4444';
  cosas = ["Lunes","Martes","Miercoles"];
  isBlue=false;


  constructor( private sh: GeneralService) {

  }

  ngOnInit() {

  }

  clicOnMe(){
    this.claseTitular="clase1";
    return this.myNumber=this.myNumber+1;

  }

  clicOnMeDown(){
    let cont=1;
    this.myNumber=this.myNumber-1;
    this.claseTitular="clase2";
  }

  cambiarArray(){
    let b=this.cosas;
  }
  mostrar(){
    this.sh.show();
  }



}
