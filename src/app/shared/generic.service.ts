import {throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {SessionService} from './services/session.service';

export class GenericService {
  constructor(private session: SessionService) {
  }

  protected handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }

  protected getRequestOptions() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.session.accessToken
    });
    return {headers};

  }

}
