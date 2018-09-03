import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // door de input kan het geinject worden
  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  // 2 eventhandlers
  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
