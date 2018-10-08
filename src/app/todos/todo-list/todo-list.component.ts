import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // door de input kan het geinject worden
  @Input()
  todos: Todo[];
  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();
  @Output()
  toggle: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  // 2 eventhandlers
  onToggleTodo(todo: Todo) {
    console.log('onToggleTodo');
    this.toggle.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    console.log('onRemoveTodo');
    this.remove.emit(todo);
  }

}
