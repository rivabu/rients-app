import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {Observable} from 'rxjs';
import {TodoApiService} from './todo-api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private api: TodoApiService) {
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  deleteTodoById(id: number): Observable<Todo> {
    return this.api.deleteTodoById(id);
  }

  updateTodoById(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.api.getTodoById(id);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  toggleTodoComplete(todo: Todo): Observable<Todo> {
    todo.complete = !todo.complete;
    console.log('todo.complete: ' + todo.complete);
    return this.api.updateTodo(todo);
  }
}
