import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'forms1',
  templateUrl: './template-form1.component.html',
  styles: []
})
export class TemplateForm1Component implements OnInit {

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
