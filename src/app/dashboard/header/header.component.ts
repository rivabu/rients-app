import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../sign-in/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'dashboard-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  doSignOut() {
    this.auth.doSignOut();
    this.router.navigate(['/sign-in']);
  }

}
