import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {SignInComponent} from "./sign-in/sign-in.component";
import {LoginRoutingModule} from "./login-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [SignInComponent],
  providers: []
})
export class SignInModule { }
