import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './formspage.component.html',
})
export class FormPageComponent implements OnInit {

  public companyForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }


  industries = [
    {id: 1, name: "Agriculture"},
    {id: 2, name: "Manufacturing"},
    {id: 3, name: "Energy"},
    {id: 4, name: "Transportation"},
    {id: 5, name: "Finance"}
  ];

  submitCompany(form){
    //this.myForm = form;
    console.log(form.value);
    //alert("The form was submitted: ");
    //form.reset();
  }

}
