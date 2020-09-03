import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
      .greenText{
        color: green;
      }
    `
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'Phone Book App!';
  exp = 20; // todos: work with boolean, array, obj

  // property binding related
  companyName = 'L & T Constructions';
  isLoggedIn = false;  // also used in *ngIf

  // two way binding related
  courseName = 'Angular';

  // custom event related
  profileName: any;

  // *ngFor related
  skillsList: string[] = ['html', 'css', 'js'];

  constructor() { }

  ngOnInit(): void {
  }

  getExp(): number {
    return this.exp;
  }

  // prop binding related
  isAuth(): boolean{
    return !this.isLoggedIn;
  }

  // event binding related
  clickHandler(evt): void{
    console.log(evt);
    alert('clicked');
    // todo: change the button label to 'Clicked' and disable it on click
  }

  // Ste 6 in CEB -- custom event binding handler
  profileLoadedHandler(evt): void{
    console.log(evt);
    this.profileName = evt;
  }
}
