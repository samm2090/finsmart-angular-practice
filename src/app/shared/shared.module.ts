import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Directives
import { RoleDirective } from './../directives/access-level/role.directive';
import { AdminLevel1Directive } from './../directives/access-level/admin-level1.directive';
import { MouseOverDirective } from './../directives/listener/mouse-over.directive';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminLevel1Directive,
    MouseOverDirective,
    RoleDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminLevel1Directive,
    MouseOverDirective,
    RoleDirective, ReactiveFormsModule
  ]
})
export class SharedModule { }
