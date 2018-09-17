import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserInfoService} from "./userInfo.service";
import {CustomValidators} from "./custom-validators";

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styles: []
})
export class Forms2Component implements OnInit {

  // ook kan een validator aan een formgroup gehangen worden..
  accountForm: FormGroup;
  emailControl: FormControl = new FormControl("",
    [Validators.required,
      Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')],
    [CustomValidators.checkDuplicateEmail(this.serverService)]
  );
  passwordControl: FormControl = new FormControl("",
    [Validators.required, Validators.minLength(3)]);

  remarkControl: FormControl = new FormControl("",
    [Validators.required]);
  //, updateOn: 'blur'


  constructor(private serverService: UserInfoService, @Inject(FormBuilder) formBuilder: FormBuilder) {

    this.accountForm = formBuilder.group({
      email: this.emailControl,
      password: this.passwordControl,
      remark: this.remarkControl})
  }

  ngOnInit() {
  }

  // handig zodat <div *ngIf="email.touched && email.errors"> etc.. gebruikt kan worden (ipv this.accountForm.get("email").touched
  get email() {
    return this.accountForm.get("email");
  }

  get password() {
    return this.accountForm.get("password");
  }

  get remark() {
    return this.accountForm.get("remark");
  }


  signup() {
    console.log(this.accountForm.get("remark").errors);
    console.log(this.accountForm.value);
    //console.log(this.accountForm.errors);
    alert('The form was submitted');
    this.accountForm.reset();
  }
}
