import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormPageComponent} from "./formspage.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [FormPageComponent]
})
export class MyFormsModule { }
