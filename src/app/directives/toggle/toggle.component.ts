import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Todo} from "../../todos/todo";
import {EventEmitter} from '@angular/core';
import {Output} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styles: []
})
export class ToggleComponent implements OnInit {

  public isShow: boolean = false;
  constructor() { }

  @Output()
  toggle: EventEmitter<String> = new EventEmitter();

  @Input() name: string = 'bla';
  @Input() clientListener:Subject<any>;

  ngOnInit() {
    this.clientListener.subscribe(event => {
      console.log('event: ' + event);
      this.close(event);
    });
  }

  openToggle() {
    console.log('open toggle: ' + this.name);
    this.toggle.emit(this.name)
  }

  close(event: string) {
   (this.name !== event) ?  this.isShow = false : this.isShow = true;
  }

  ngOnDestroy() {
    // needed if child gets re-created (eg on some model changes)
    // note that subsequent subscriptions on the same subject will fail
    // so the parent has to re-create parentSubject on changes
    this.clientListener.unsubscribe();
  }
}
