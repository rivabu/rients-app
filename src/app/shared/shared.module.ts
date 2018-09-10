import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyErrorDirective} from "./directives/my-error.directive";
import {MyIfDirective} from "./directives/my-if.directive";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [MyIfDirective, MyErrorDirective, PageNotFoundComponent], // directive die in deze module gebruikt worden
  exports: [MyIfDirective, MyErrorDirective, PageNotFoundComponent] // als directive buiten de module gebruikt wordt
})
export class SharedModule { }
