import {Injectable} from '@angular/core';
import {SessionService} from '../shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private session: SessionService) {
    console.log('creating AuthService');
  }

  public isSignedIn() {
    console.log('isSigned in: ' + !!this.session.accessToken);
    return !!this.session.accessToken;
  }

  public doSignOut() {
    console.log('destroy!!!');
    this.session.destroy();
  }

  public doSignIn(accessToken: string, name: string) {
    if ((!accessToken) || (!name)) {
      return;
    }
    this.session.accessToken = accessToken;
    this.session.name = name;
    console.log('session: ' + JSON.stringify(this.session));
  }

}
