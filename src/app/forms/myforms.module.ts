import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormPageComponent} from "./formspage.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsRoutingModule} from "./forms-routing.module";
import { Forms2Component } from './forms2/forms2.component';
import {TemplateForm1Component} from "./templateform1/template-form1.component";
import {SharedModule} from "../shared/shared.module";
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {APIService} from "./api-service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsRoutingModule, SharedModule
  ],
  providers: [
    APIService
  ],
  declarations: [FormPageComponent, NavbarComponent, TemplateForm1Component, Forms2Component, AutocompleteComponent]
})
export class MyFormsModule { }
