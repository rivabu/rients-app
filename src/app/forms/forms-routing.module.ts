import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormPageComponent} from "./formspage.component";

const formsRoutes: Routes = [
  {
    path: '',
    component: FormPageComponent
    //pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(formsRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class FormsRoutingModule {
}


