import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';

const loginRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class LoginRoutingModule {
}


