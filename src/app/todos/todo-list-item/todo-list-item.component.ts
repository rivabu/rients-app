import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  // door de input kan het geinject worden
  @Input()
  todo: Todo;
  @Output()
  toggle: EventEmitter<Todo> = new EventEmitter();
  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  // 2 eventhandlers
  toggleTodoComplete(todo: Todo) {
    console.log('toggleTodoComplete');
    this.toggle.emit(todo);
  }

  removeTodo(todo: Todo) {
    console.log('removeTodo');
    this.remove.emit(todo);
  }

}
