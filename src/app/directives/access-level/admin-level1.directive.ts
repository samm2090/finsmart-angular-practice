import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ng-adminLevel1]'
})
export class AdminLevel1Directive {
  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.display = 'none';
  }

}
