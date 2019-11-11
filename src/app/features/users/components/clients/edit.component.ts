import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from './../../../../services/client.service';
import { Client } from './../../../../model/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {

  @Input('client') client: Client;

  @Input('clientForm') clientForm = new FormGroup({
    name: new FormControl(),
    lastName: new FormControl(),
  });

  constructor(private clientService: ClientService,
    private router: Router) {
  }

  ngOnInit() {
    this.client = {
      id: 0,
      name: "",
      last_name: ""
    }
  }

  saveClient() {
    let client = {
      id: this.client.id,
      name: this.clientForm.controls['name'].value,
      lastName: this.clientForm.controls['lastName'].value
    }

    this.clientService.update(client).subscribe((data) => {
      window.location.reload();
      // this.router.navigate(['users/clients']);
    })

  }

}
