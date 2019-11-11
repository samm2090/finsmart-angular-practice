import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './../../../../services/auth.service';
import { ClientService } from './../../../../services/client.service';

@Component({
  selector: 'app-create-account-client',
  templateUrl: './create-account-client.component.html',
  styles: []
})
export class CreateAccountClientComponent implements OnInit {

  constructor(private auth: AuthService, private clientService: ClientService) { }

  ngOnInit() {
  }

  userForm = new FormGroup({
    name: new FormControl(),
    lastName: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });

  createUser() {
    let client = {
      name: this.userForm.controls['name'].value,
      lastName: this.userForm.controls['lastName'].value
    };

    let user = {
      username: this.userForm.controls['username'].value,
      password: this.userForm.controls['password'].value
    };

    this.auth.registerUser(user).subscribe((resp) => {
      console.log(resp);
    });

    this.clientService.create(client).subscribe((resp)=>{
      console.log(resp);
    });

  }

}
