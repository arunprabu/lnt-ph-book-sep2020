import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: create custom event -- create an Obj for EventEmitter
  @Output() profileLoaded: EventEmitter<any> = new EventEmitter<any>(); // Step 2: @Output() will make profileLoaded as custom event 

  constructor() {
    console.log('Inside Constructor');
  }

  ngOnInit(): void { // lifecycle hook
    console.log('Inside ngOnInit');
    // ideal place for ajax calls
  }

  sendDataHandler(): void{
    // Step 3: Emit the custom event.
    this.profileLoaded.emit('Arun'); // Step4: Sending 'Arun' to parent comp
  }

}
