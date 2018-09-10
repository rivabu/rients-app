import { Component } from '@angular/core';

@Component({
  selector: 'mystyle',
  templateUrl: './mystyle.component.html',
  styles: ['white-text {color: white}']
})
export class MyStyleComponent {
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
