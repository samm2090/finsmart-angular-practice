import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ng-role-validation]'
})
export class RoleDirective implements OnInit {

  @Input("ng-role-validation") role: string;

  constructor(private elem: ElementRef) {
  }

  ngOnInit() {
    if (this.role === 'admin') {
      this.elem.nativeElement.style.display = 'none';
    }
  }

}
