import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styles: []
})
export class OverviewComponent implements OnInit {

  showAngular: boolean = true;
  showGit: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showMyGit() {
    this.showAngular = false;
    this.showGit = true
  }

  showMyAngular() {
    this.showAngular = true;
    this.showGit = false
  }

}
