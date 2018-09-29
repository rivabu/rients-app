import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyErrorDirective} from "./directives/my-error.directive";
import {MyIfDirective} from "./directives/my-if.directive";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {MaxWordCountValidator} from "./directives/max-word-count.directive";
import {ClickOnOffComponent} from "./click-on-off/click-on-off.component";
import {LOGO_URL} from "./logo-url.token";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [{provide: LOGO_URL, useValue: 'https://angular.io/assets/images/logos/angular/angular.png'}],
  declarations: [MyIfDirective, MyErrorDirective, MaxWordCountValidator, PageNotFoundComponent, ClickOnOffComponent], // directive die in deze module gebruikt worden
  exports: [MyIfDirective, MyErrorDirective, MaxWordCountValidator, PageNotFoundComponent, ClickOnOffComponent] // als directive buiten de module gebruikt wordt
})
export class SharedModule {
}
