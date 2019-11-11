import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account-investor',
  templateUrl: './create-account-investor.component.html',
  styleUrls: []
})
export class CreateAccountInvestorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });
}
