import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // door de input kan het geinject worden
  @Input() todos: Todo[];
}
