import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormPageComponent} from "./formspage.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { Forms1Component } from './forms1/forms1.component';
import {FormsRoutingModule} from "./forms-routing.module";
import { Forms2Component } from './forms2/forms2.component'; // <== add the imports!

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsRoutingModule
  ],
  declarations: [FormPageComponent, NavbarComponent, Forms1Component, Forms2Component]
})
export class MyFormsModule { }
