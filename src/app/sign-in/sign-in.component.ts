import { Component, OnInit } from '@angular/core';
import { ApiService} from "../api.service";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {ifTrue} from "codelyzer/util/function";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public frm: FormGroup;
  public isBusy: boolean = false;
  public hasFailed: boolean = false;
  public showInputErrors: boolean = false;
  public condition: boolean = false;

  constructor(private api: ApiService,
              private auth: AuthService,
              private fb: FormBuilder,
              private router: Router) {
    this.frm = fb.group({
      username: ['demo', Validators.required],
      password: ['demo', Validators.required]
    })
  }

  ngOnInit() {
  }

  public doSignIn() {
    // Make sure from values are valid
    if (this.frm.invalid) {
      this.showInputErrors = true;
      return;
    }
    // Reset status
    this.isBusy = true;
    this.hasFailed = false;

    //Grab values from the form
    const username = this.frm.get('username').value;
    const password = this.frm.get('password').value;

    // Submit request to api
    this.api
      .signIn(username, password)
      .subscribe(
        (response) => {
          console.log('response: ' + JSON.stringify(response));
          this.auth.doSignIn(
            response.token,
            response.name
          );
          // todos = the url!!
          this.router.navigate(['todos']);

        },
      (error) => {
          this.isBusy = false;
          this.hasFailed = true;
      }
      );
  }
}
