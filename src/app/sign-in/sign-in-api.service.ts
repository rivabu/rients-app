import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {SessionService} from "../shared/services/session.service";
import {GenericService} from "../shared/generic.service";

// import {HttpClient} from "@angular/common/http";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SignInApiService extends GenericService {

  constructor(private http: HttpClient, session: SessionService) {
    super(session);
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


}
