import {Component, OnDestroy} from '@angular/core';
import {OnOffService, Switch} from '../../shared/services/on-off-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'on-off',
  template: `
    <button *ngIf='!stateIsOn'
            (click)='setOn()'>
      ON
    </button>
    <button *ngIf='stateIsOn'
            (click)='setOf()'>
      OFF
    </button>
  `
})
export class ClickOnOffComponent implements OnDestroy {
  stateIsOn: boolean;
  private onOffSubscription: Subscription;

  constructor(private onOffService_: OnOffService) {
    // we ontvangen de newState
    this.onOffSubscription = onOffService_.switchChange.subscribe(
      newState =>
        this.stateIsOn = (newState === Switch.On));
  }

  setOn(): void {
    this.onOffService_.setOn();
  }

  setOf(): void {
    this.onOffService_.setOff();
  }

  ngOnDestroy() {
    this.onOffSubscription.unsubscribe();
  }
}
