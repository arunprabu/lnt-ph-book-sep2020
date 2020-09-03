import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Have the form tag equivalent in TS -- FormGroup
  contactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // Step 1 continues with FormGroup object
    this.contactForm = new FormGroup({
      // Step 2: Have form field equivalent in TS
      name: new FormControl('', Validators.required), // Step 5: Work with Validators
      phone: new FormControl('', Validators.required), // Refer TS for step 6 // todo: max length 10
      email: new FormControl('', [Validators.required, Validators.email])
    }); // Refer HTML for step 3.
  }

  addContactHandler(): void{
    // you can find the entire formGroup object inside incl dirty, touched, pristine 
    console.log(this.contactForm.value);
  }
}
