import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {APIService} from '../api-service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'auto-complete',
  template: `
    <input [formControl]='queryField'>
    <p *ngFor='let result of results'>{{result}}</p>
  `
})
export class AutocompleteComponent {
  results: Array<string> = [];
  queryField: FormControl = new FormControl();

  constructor(private apiService_: APIService) {
    this.handleQuery();
  }

  handleQuery() {
    this.queryField.valueChanges
      .pipe(
        debounceTime(250)) // wacht 250ms voor versturen
      .pipe(
        distinctUntilChanged())
      .pipe(
//        flatMap(query => this.apiService_.search(query))
        switchMap(query => this.apiService_.search(query))
      )
      .subscribe(result => this.results.push(result))
  }
}
