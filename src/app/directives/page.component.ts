import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit {

  public condition: boolean = false;
  public username: string = 'rivabu';
  constructor() { }

  ngOnInit() {
  }

}
