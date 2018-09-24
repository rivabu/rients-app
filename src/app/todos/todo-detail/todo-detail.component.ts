import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Observable} from 'rxjs';
import {Params} from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styles: []
})
export class TodoDetailComponent implements OnInit {

  todoId: number;
  params: Observable<Params>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.params = activatedRoute.params;

    this.activatedRoute.paramMap.subscribe(
      params => {
        console.log('params: ' + JSON.stringify(params));
        console.log(params.get('todoId'));
        this.todoId = parseInt(params.get('todoId'));
      }

    )
  }

  ngOnInit() {
  }

}
