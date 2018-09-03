import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from "./todos/todos.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TodosResolver} from "./todos.resolver";
import {SignInComponent} from "./sign-in/sign-in.component";
import {CanActivateTodoGuard} from "./can-activate-todo.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [CanActivateTodoGuard],
    resolve: {
      todos: TodosResolver
    },
    data: {title: 'example of a static route'}
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    TodosResolver, CanActivateTodoGuard
  ]
})
export class AppRoutingModule {
}
