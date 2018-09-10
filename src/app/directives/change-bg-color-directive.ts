import {Directive, ElementRef, HostListener, Renderer} from '@angular/core';
import {HostBinding} from '@angular/core';

@Directive({
  selector: '[appChbgcolor]'
})
/*
https://dzone.com/articles/what-are-hostbinding-and-hostlistener-in-angular
 */
export class ChangeBgColorDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  // In Angular, the @HostListener() function decorator makes it super easy to
  // handle events raised in the host element inside the directive class.
  @HostListener('click') onClick() {
    window.alert('Host Element Clicked');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBgColor('black');
  }

  // The @HostBinding() decorator takes one parameter, the
  // name of the host element property which value we want to assign in the directive.
  @HostBinding('style.border') border: string;

  @HostListener('mouseover') onMouseOver() {
    this.ChangeBgColor('red');
    this.border = '5px solid green';
  }


  ChangeBgColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }
}
