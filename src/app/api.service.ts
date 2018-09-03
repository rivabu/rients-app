import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Todo} from "./todo";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from 'rxjs';
import {SessionService} from "./session.service";

// import {HttpClient} from "@angular/common/http";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private session: SessionService) {
  }

  public signIn(username: string, password: string) {
    return this.http
      .post(API_URL + '/sign-in', {
        username,
        password
      })
      .pipe(map((response: any) => {
          const myResponse = response;
          return myResponse;
        }),
        catchError(this.handleError)
      )
  }

  public getAllTodos(): Observable<Todo[]> {
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
    return this.http.put(API_URL + '/todos/', todo, options).pipe
    (
      map(
        (response: any) => {
          return new Todo(response.json())
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

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }

  private getRequestOptions() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.session.accessToken
    });
    return { headers};

  }

}
