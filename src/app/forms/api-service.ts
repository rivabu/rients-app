import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {delay, map, debounceTime} from 'rxjs/operators';
import {GenericService} from "../shared/generic.service";
import {SessionService} from "../shared/services/session.service";
import {environment} from "../../environments/environment";

const API_URL = environment.apiUrl;

@Injectable()
export class APIService extends GenericService {
  constructor(private http: HttpClient, session: SessionService) {
    super(session);
  }

  search(query: string): Observable<string> {
    let time = Math.random() * 3000;
    console.log('time: ' + time);
    const options = this.getRequestOptions();
    return this.http.get(API_URL + '/data', options).pipe
    (
      map(
        r => r['prefix'] + query)
    )
      .pipe(
        delay(time)
      )
      .pipe(
        debounceTime(250))
  }


}
