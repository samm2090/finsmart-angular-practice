import { Component, OnInit } from '@angular/core';
import { Client } from './../../../../model/client';
import { ClientService } from './../../../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: []
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) {
    this.clientService.findAll().subscribe((data) => {
      this.clients = data;
    });
  }

  ngOnInit() { }

}
