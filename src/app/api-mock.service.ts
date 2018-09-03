import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, fromEvent, of } from 'rxjs';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllTodos(): Observable<Todo[]> {
    return Observable.create([
      new Todo({id: 1, title: 'Read article', complete: false})
    ]);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return Observable.create(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return Observable.create(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return Observable.create(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return null;
  }
}
