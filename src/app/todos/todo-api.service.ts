import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {SessionService} from "../shared/services/session.service";
import {Todo} from "./todo";
import {GenericService} from "../shared/generic.service";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TodoApiService extends GenericService {

  constructor(private http: HttpClient, session: SessionService) {
    super(session);
  }

  public getAllTodos(): Observable<Todo[]> {
    console.log('here');
    const options = this.getRequestOptions();
    return this.http.get(API_URL + '/todos', options).pipe
    (
      map(
        (response: any) => {
          const todos = response;
          return todos.map((todo) => new Todo(todo))
        }
      ),
      catchError(this.handleError)
    )
  }

  public createTodo(todo: Todo) {
    const options = this.getRequestOptions();
    return this.http.post(API_URL + '/todos/', todo, options).pipe
    (
      map(
        (response: any) => {
          return new Todo(response)
        }
      ),
      catchError(this.handleError)
    )
  }

  public getTodoById(todoId: Number) {
    const options = this.getRequestOptions();
    return this.http.get(API_URL + '/todos/' + todoId, options).pipe
    (
      map(
        (response: any) => {
          return new Todo(response)
        }
      ),
      catchError(this.handleError)
    )
  }

  public updateTodo(todo: Todo) {
    const options = this.getRequestOptions();
    return this.http.put(API_URL + '/todos/' + todo.id, todo, options).pipe
    (
      map(
        (response: any) => {
          return new Todo(response)
        }
      ),
      catchError(this.handleError)
    )
  }

  public deleteTodoById(todoId: Number) {
    const options = this.getRequestOptions();
    return this.http.delete(API_URL + '/todos/' + todoId, options).pipe
    (
      map(
        (response: any) => null
      ),
      catchError(this.handleError)
    )
  }



}
