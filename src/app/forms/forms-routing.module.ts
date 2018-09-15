import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Forms1Component} from "./forms1/forms1.component";
import {FormPageComponent} from "./formspage.component";
import {Forms2Component} from "./forms2/forms2.component";

const formsRoutes: Routes = [
  {
    path: '',
    component: FormPageComponent,
    children: [
      {
        path: '',
        component: Forms1Component,
        pathMatch: 'full'
      },
      {
        path: 'form1',
        component: Forms1Component
        // pathMatch: 'full'
      },
      {
        path: 'form2',
        component: Forms2Component
        // pathMatch: 'full'
      }]
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


