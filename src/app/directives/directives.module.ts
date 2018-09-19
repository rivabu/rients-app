import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DirectivesRoutingModule} from "./directives-routing.module";
import {PageComponent} from "./page.component";
import {SharedModule} from "../shared/shared.module";
import {ChangeBgColorDirective} from "./change-bg-color-directive";
import {MyStyleComponent} from "./mystyle.component";
import { ToggleComponent } from './toggle/toggle.component';
import { ToggleParentComponent } from './toggle-parent/toggle-parent.component';
import { ClickObserverComponent } from './click-observer/click-observer.component';

@NgModule({
  imports: [
    CommonModule, DirectivesRoutingModule, SharedModule
  ],
  declarations: [PageComponent, MyStyleComponent, ChangeBgColorDirective, ToggleComponent, ToggleParentComponent, ClickObserverComponent]
})
export class DirectivesModule { }
