import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // door de input kan het geinject worden
  @Input()
  todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  // 2 eventhandlers
  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
