import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styles: []
})
export class ToggleComponent implements OnInit {

  public isShow: boolean = false;
  @Output()
  toggle: EventEmitter<String> = new EventEmitter();
  @Input() name: string = 'bla';
  @Input() clientListener: Observable<String>; // do not expose the Subject to the client, only the Observable..

  constructor() {
  }

  ngOnInit() {
    // this is the subscribe
    this.clientListener.subscribe(event => {
      console.log('event: ' + event);
      this.close(event);
    });
  }

  openToggle() {
    console.log('open toggle: ' + this.name);
    // send event to parent
    this.toggle.emit(this.name)
  }

  close(event: String) {
    (this.name !== event) ? this.isShow = false : this.isShow = true;
  }


}
