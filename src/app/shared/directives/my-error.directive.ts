import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[my-error]'
})
export class MyErrorDirective {

  constructor(elr: ElementRef) {
    elr.nativeElement.style.background = 'red';
  }

}
