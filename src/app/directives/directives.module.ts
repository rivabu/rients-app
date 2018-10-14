import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirectivesRoutingModule} from './directives-routing.module';
import {PageComponent} from './page.component';
import {SharedModule} from '../shared/shared.module';
import {ChangeBgColorDirective} from './change-bg-color-directive';
import {MyStyleComponent} from './mystyle.component';
import {ToggleComponent} from './toggle/toggle.component';
import {ToggleParentComponent} from './toggle-parent/toggle-parent.component';
import {ClickObserverComponent} from './click-observer/click-observer.component';
import {NodeComponent} from './node/node.component';
import {InnerComponent} from './inner-outer/inner.component';
import {OuterComponent} from './inner-outer/outer.component';
import { MagicEightBallComponent } from './magic-eight-ball/magic-eight-ball.component';
import { SqrtPipe } from './sqrt.pipe';
import { AnimateComponent } from './animate/animate.component';

@NgModule({
  imports: [
    CommonModule, DirectivesRoutingModule, SharedModule
  ],
  declarations: [PageComponent, MyStyleComponent, ChangeBgColorDirective, ToggleComponent, ToggleParentComponent, ClickObserverComponent, NodeComponent, InnerComponent, OuterComponent, MagicEightBallComponent, SqrtPipe, AnimateComponent, AnimateComponent]
})
export class DirectivesModule {
}
