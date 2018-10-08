import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public accessToken: string;
  public name: string;

  constructor() {
    console.log('new instance of SessionService created');
  }

  public destroy(): void {
    this.accessToken = null;
    this.name = null;
  }
}
