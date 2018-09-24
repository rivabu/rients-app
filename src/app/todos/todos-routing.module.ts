import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from "./todos/todos.component";
import {CanActivateTodoGuard} from "./can-activate-todo.guard";
import {TodosResolver} from "./todos.resolver";
import {PageNotFoundComponent} from "../shared/components/page-not-found/page-not-found.component";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";
import {TodoMainPageComponent} from "./todo-main-page/todo-main-page.component";

const todoRoutes: Routes = [
  {
    path: '',
    component: TodoMainPageComponent,
    children: [
      {
        path: '',
        component: TodosComponent,
        canActivate: [CanActivateTodoGuard],
        resolve: {
          todosFromResolver: TodosResolver
        },
        data: {title: 'example of a static route'},
        pathMatch: 'full'
      },
      {
        path: ':todoId',
        component: TodoDetailComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(todoRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    TodosResolver, CanActivateTodoGuard
  ]
})
export class TodosRoutingModule {
}


