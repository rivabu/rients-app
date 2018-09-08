import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Todo} from "../todo";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  addTodo() {
    // add = output -> naar buiten zenden
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

  doSignOut() {
    this.auth.doSignOut();
    this.router.navigate(['/sign-in']);
  }

  goToToDos() {
    console.log('navigate to todos')
    this.router.navigate(['todos']);
  }
}
