import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = "//localhost:8080/client"

  constructor(private http: HttpClient) { }

  create(client: any){
    return this.http.post(this.url, client);
  }

  update(client: any) {
    return this.http.put(this.url + '/' + client.id, client);
  }

  findOne(id: number) {
    return this.http.get<Client>(this.url + "/" + id);
  }

  findAll() {
    return this.http.get<Client[]>(this.url + "s");
  }

  delete(id: number) {
    return this.http.delete(this.url + "/" + id);
  }

}
