import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, FormGroup, Validators} from '@angular/forms';
import { GeneralService } from 'src/app/general.service';
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  constructor(private fb: FormBuilder, private gs: GeneralService) {
    this.myForm = this.fb.group({
      employeeName:['',[Validators.required]],
      dni:['',[]]
      });
   }
  myForm: FormGroup;

  ngOnInit() {
  }

  enviar(val){
    this.gs.enviar(this.myForm.value.dni);
  }

  hasError(controlName){
    return this.myForm.controls[controlName].invalid;
  }

}
