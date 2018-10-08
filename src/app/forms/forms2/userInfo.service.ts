import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {GenericService} from '../../shared/generic.service';
import {environment} from '../../../environments/environment';
import {SessionService} from '../../shared/services/session.service';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserInfoService extends GenericService {

  constructor(private http: HttpClient, session: SessionService) {
    super(session);
  }

  // public getAllTodos(): Observable<Todo[]> {
  //   console.log('here');
  //   const options = this.getRequestOptions();
  //   return this.http.get(API_URL + '/todos', options).pipe
  //   (
  //     map(
  //       (response: any) => {
  //         const todos = response;
  //         return todos.map((todo) => new Todo(todo))
  //       }
  //     ),
  //     catchError(this.handleError)
  //   )
  // }


  public checkUsers(email: string) {
    console.log('checking email: ' + email);
    const options = this.getRequestOptions();
    var userlist;
    return this.http
      .get(API_URL + '/users', options).pipe(
        map(
          (response: any) => {
            console.log(response);
            userlist = response.filter((t) => t.email === email);
            console.log('userlist: ' + JSON.stringify(userlist));
            console.log('userlist: ' + userlist.length);
            return userlist.length;
            //
            //return response.map(users => response.filter(user => { console.log('user email: '  + user.email); user.email === email}))

            //.map(response => !response.length)
          }
        )
      )
  }


}
