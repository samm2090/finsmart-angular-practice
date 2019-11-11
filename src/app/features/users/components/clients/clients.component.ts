import { Component, OnInit } from '@angular/core';
import { Client } from './../../../../model/client';
import { ClientService } from './../../../../services/client.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: []
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  client: Client;
  clientForm = new FormGroup({
    name: new FormControl(),
    lastName: new FormControl(),
  });

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.clientService.findAll().subscribe((data) => {
      this.clients = data;
    });
  }

  editClient(client: Client) {
    this.client = client;
    this.clientForm.setValue({
      name: this.client.name,
      lastName: this.client.last_name
    });
  }

  deleteClient(client: Client, i: number) {
    this.clientService.delete(client.id).subscribe((data) => {
      console.log(data);
      this.clients.splice(i, 1);
    });
  }


}
