import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormPageComponent} from "./formspage.component";
import {Forms2Component} from "./forms2/forms2.component";
import {TemplateForm1Component} from "./templateform1/template-form1.component";

const formsRoutes: Routes = [
  {
    path: '',
    component: FormPageComponent,
    children: [
      {
        path: '',
        component: TemplateForm1Component,
        pathMatch: 'full'
      },
      {
        path: 'templateform1',
        component: TemplateForm1Component
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


