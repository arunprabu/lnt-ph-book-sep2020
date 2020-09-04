import { Component, OnInit } from '@angular/core';

import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  contactList: any[];

  constructor(private contactService: ContactService) { // 1. connect to the service
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    // ideal place for us to send ajax calls
    console.log('Inside ngOnInit');
    // 2. send the request to the service
    this.contactService.getContacts()
      .subscribe( (res: any) => {  // 3. get the resp from service
        console.log(res);
        this.contactList = res;
      });
  }

}
