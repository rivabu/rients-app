import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../todo-data.service";
import {Todo} from "../todo";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute) {
  }

  public ngOnInit() {
    // ophalen bij de router, die heeft de todoResolver aangeroepen: this.route.data ..
    this.route.data.pipe(
      map((data) => data['todosFromResolver']))
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo).subscribe((newTodo) => {
      this.todos = this.todos.concat(newTodo)
    });
  }

  onToggleTodoComplete(todo: Todo) {
    console.log('onToggleTodoComplete');
    this.todoDataService.toggleTodoComplete(todo).subscribe((updatedTodo) => todo = updatedTodo);
  }

  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id).subscribe((_) => {
      // bewaar alles dat niet matched met todo.id
      this.todos = this.todos.filter((t) => t.id !== todo.id)
    })
  };




}
