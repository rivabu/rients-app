import {Component, Inject, OnInit} from '@angular/core';
import {LOGO_URL} from '../shared/logo-url.token';

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
