import {Component, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';

@Component({
  selector: 'click-observer',
  template: `
    <button #btn>
      Emit event!
    </button>
    <p *ngFor='let click of clicks; let i = index'>
      {{i}}: {{click}}
    </p>
  `
})
export class ClickObserverComponent implements OnInit {
  @ViewChild('btn') btn;
  clickEmitter: Observable<Event>;
  clicks: Array<Event> = [];

  ngOnInit() {
    this.clickEmitter = fromEvent(
      this.btn.nativeElement, 'click');
    this.clickEmitter.subscribe(clickEvent =>
      this.clicks.push(clickEvent));
  }
}
