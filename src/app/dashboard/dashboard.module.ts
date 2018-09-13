import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {TodosModule} from "../todos/todos.module";
import { HeaderComponent } from './header/header.component';
import {DirectivesModule} from "../directives/directives.module";
import {MyFormsModule} from "../forms/myform.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule, TodosModule, DirectivesModule, MyFormsModule
  ],
  declarations: [DashboardComponent, HeaderComponent]
})
export class DashboardModule { }
