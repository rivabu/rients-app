import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TodosComponent} from "../todos/todos/todos.component";
import {CanActivateTodoGuard} from "../todos/can-activate-todo.guard";
import {TodosResolver} from "../todos/todos.resolver";
import {PageComponent} from "../directives/page.component";
import {PageNotFoundComponent} from "../shared/components/page-not-found/page-not-found.component";
import {FormPageComponent} from "../forms/formspage.component";

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // pathMatch: 'full',
    children: [
      {
        path: '',
        component: TodosComponent,
        canActivate: [CanActivateTodoGuard],
        resolve: {
          todosFromResolver: TodosResolver
        },
      },
      {
        path: 'directives',
        component: PageComponent
      },
      {
        path: 'forms',
        component: FormPageComponent
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


