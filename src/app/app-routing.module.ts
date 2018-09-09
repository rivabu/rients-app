import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: '../app/sign-in/sign-in.module#SignInModule',
    data: {preload: true}
  },
  {
    path: 'todos',
    loadChildren: '../app/todos/todos.module#TodosModule',
    data: {preload: true},
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: '../app/dashboard/dashboard.module#DashboardModule'
    //pathMatch: 'full' <!-- hierdoor werkt child routing niet meer
  },
  {
    path: 'directives',
    loadChildren: '../app/directives/directives.module#DirectivesModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
