import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'Phone Book App!';
  exp = 20; // todos: work with boolean, array, obj

  // property binding related
  companyName = 'L & T Constructions';

  constructor() { }

  ngOnInit(): void {
  }

  getExp(): number {
    return this.exp;
  }
}
