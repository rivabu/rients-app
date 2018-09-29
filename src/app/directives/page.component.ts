import { Component, OnInit } from '@angular/core';
import {LOGO_URL} from "../shared/logo-url.token";
import {Inject} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit {

  logoUrl: string;

  constructor(@Inject(LOGO_URL) private logoUrl_) {
    this.logoUrl = logoUrl_;
  }

  ngOnInit() {
  }

}
