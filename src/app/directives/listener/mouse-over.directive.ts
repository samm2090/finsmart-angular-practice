import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ng-mouseOver]'
})
export class MouseOverDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('mouseenter') mouseEnter(){
    this.elem.nativeElement.style.backgroundColor = 'blue';
  }
}
