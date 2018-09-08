import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyErrorDirective} from "./directives/my-error.directive";
import {MyIfDirective} from "./directives/my-if.directive";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyIfDirective, MyErrorDirective, PageNotFoundComponent],
  exports: [MyIfDirective, MyErrorDirective, PageNotFoundComponent]
})
export class SharedModule { }
