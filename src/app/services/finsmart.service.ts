import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinsmartService {

  private main_url = '//localhost:8080/';

  constructor(private http: HttpClient) { }

  getClients() {
    return this.get('clients');
  }

  getMockService() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  get(query: string) {
    const url = this.main_url + query;
    return this.http.get(url)
  }


}
