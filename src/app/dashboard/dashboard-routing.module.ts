import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TodosComponent} from '../todos/todos/todos.component';
import {PageComponent} from '../directives/page.component';
import {PageNotFoundComponent} from '../shared/components/page-not-found/page-not-found.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // pathMatch: 'full',
    children: [

      {
        path: 'todos',
        loadChildren: '../todos/todos.module#TodosModule'
      },
      {
        path: 'directives',
        component: PageComponent
      },
      {
        path: 'forms',
        loadChildren: '../forms/myforms.module#MyFormsModule'
      },
      {
        path: 'summary',
        loadChildren: '../summary/summary.module#SummaryModule'
      },
      {
        path: '',
        redirectTo: 'todos'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [TodosComponent, PageComponent]
})
export class DashboardRoutingModule {
}


