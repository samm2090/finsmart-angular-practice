import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: []
})
export class LoginFormComponent implements OnInit {
  active: number;
  userLabel: string;
  createType:string;

  @ViewChild('userInput', { static: false }) userInput: ElementRef;

  ngOnInit() {
    this.userLabel = "User";
    this.active = 1;
    this.createType="client";
  }

  changeActive(active: number) {
    this.active = active;
    if (active == 1) {
      this.userLabel = "User";
      this.userInput.nativeElement.focus();
      this.createType="client";
    } else {
      this.userLabel = "Email";
      this.userInput.nativeElement.focus();
      this.createType ="investor";
    }
  }

  userLoginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
}
