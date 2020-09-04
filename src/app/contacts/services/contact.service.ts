import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorators
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient ) { }

  createContact( contactData: any ): any { // 1. get the data from comp
    console.log(contactData);
    // 2. send the data to REST API
      // 2.1 What is the REST API URL?  http://jsonplaceholder.typicode.com/users
      // 2.2 What is the HTTP Method?   POST
      // 2.3 What's the REST API client?  HttpClient
    return this.http.post(this.REST_API_URL, contactData)
      .pipe( map( (res: any) => { // 3. get the resp from REST API
        console.log(res);
        return res;  // 4. send the resp to the comp.
      }));
  }


  getContacts(): any { // 1. get the req from comp
    console.log('Inside getContacts');
    // 2. send it to the rest api- REST_API_URL, Method: GET, Use http client
    return this.http.get(this.REST_API_URL)
      .pipe( map( (res: any) => { // 3. get the resp from REST API
        console.log(res);
        return res;  // 4. send the resp to the comp.
      }));
  }

}
