import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DirectivesRoutingModule} from "./directives-routing.module";
import {PageComponent} from "./page.component";
import {SharedModule} from "../shared/shared.module";
import {ChangeBgColorDirective} from "./change-bg-color-directive";
import {MyStyleComponent} from "./mystyle.component";

@NgModule({
  imports: [
    CommonModule, DirectivesRoutingModule, SharedModule
  ],
  declarations: [PageComponent, MyStyleComponent, ChangeBgColorDirective]
})
export class DirectivesModule { }
