import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Todo} from "../todo";
import {Router} from "@angular/router";
import {AuthService} from "../../sign-in/auth.service";

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    // add = output -> naar buiten zenden
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }


}
