import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './components/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

// configure child routes
const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/:id', component: ContactDetailsComponent }, // url param is id
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // registering child routes
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule { }
