import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {OnInit} from '@angular/core';
import {LOGO_URL} from "../../shared/logo-url.token";
import {Inject} from '@angular/core';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  styles:[`
      div{
         margin: 0 auto;
         text-align: center;
         width:200px;
      }
      .rotate{
         width:100px;
         height:100px;
         border:solid 1px red;
      }
   `],
  animations: [
    trigger('myanimation',[
      state('smaller',style({
        transform : 'translateX(100px)'
      })),
      state('larger',style({
        transform : 'translateX(0px)'
      })),
      transition('smaller <=> larger',animate('300ms ease-in'))
    ])
  ]
})
export class AnimateComponent {

  logoUrl: string;

  constructor(@Inject(LOGO_URL) private logoUrl_) {
    this.logoUrl = logoUrl_;
  }


  state: string = "smaller";
  animate() {
    this.state= this.state == 'larger' ? 'smaller' : 'larger';
  }
}
