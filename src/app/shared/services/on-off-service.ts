import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OnOffService {
  private switchManager_:BehaviorSubject<Switch>
    = new BehaviorSubject(Switch.Off);
  private switch_:Switch;
  switchChange:Observable<Switch>;


  constructor() {
    this.switchChange = this.switchManager_.asObservable();
  }
  setOn():void {
    this.setAuthState_(Switch.On);
  }
  setOff():void {
    this.setAuthState_(Switch.Off);
  }
  emitNewState():void {
    this.switchManager_.next(this.switch_);
  }
  private setAuthState_(newState:Switch):void {
    this.switch_ = newState;
    this.emitNewState();
  }
}

export const enum Switch {
  On,
  Off
}
