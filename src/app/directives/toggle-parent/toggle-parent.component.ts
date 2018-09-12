import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {SessionService} from "../../shared/services/session.service";

@Component({
  selector: 'toggle-parent',
  templateUrl: './toggle-parent.component.html',
  styles: []
})
export class ToggleParentComponent implements OnInit {
  public condition: boolean = false;
  public username: string;
  public title: string = 'zomaar een title';

  // publish subscribe middels subjects
  parentSubject:Subject<any> = new Subject();

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.username = this.session.name;
  }

  onToggle(toggleName: string) {
    this.parentSubject.next(toggleName);
  }

}
