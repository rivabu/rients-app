import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DirectivesRoutingModule} from "./directives-routing.module";
import {PageComponent} from "./page.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule, DirectivesRoutingModule, SharedModule
  ],
  declarations: [PageComponent]
})
export class DirectivesModule { }
