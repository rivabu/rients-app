import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserInfoService} from "./userInfo.service";
import {Customvalidators} from "./Customvalidators";

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styles: []
})
export class Forms2Component implements OnInit {

  accountForm = new FormGroup({
    email: new FormControl("",

      [Validators.required,
        Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')]
      ,
      [Customvalidators.checkDuplicateEmail(this.serverService)]),
    password: new FormControl("",
      [Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')])
  });


  //, updateOn: 'blur'

  constructor(private serverService: UserInfoService) {
  }

  ngOnInit() {
  }

  // handig zodat <div *ngIf="email.touched && email.errors"> etc.. gebruikt kan worden (ipv this.accountForm.get("email").touched
  get email() {
    return this.accountForm.get("email");
  }

  signup() {
    console.log(this.accountForm.value);
    alert('The form was submitted');
    this.accountForm.reset();
  }
}
