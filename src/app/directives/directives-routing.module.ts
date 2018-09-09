import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from "./page.component";

const directiveRoutes: Routes = [
  {
    path: '',
    component: PageComponent
    //pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(directiveRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class DirectivesRoutingModule {
}


