import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulariosComponent } from './formularios/formularios.component';



@NgModule({
  declarations: [NavBarComponent, MainComponent, FooterComponent, FormulariosComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,


  ],
  exports: [
    NavBarComponent,
    MainComponent,
    FooterComponent,
    FormulariosComponent
  ]
})
export class LayoutModule { }
