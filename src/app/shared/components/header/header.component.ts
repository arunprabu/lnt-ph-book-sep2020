import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../../services/account-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', // html
  styleUrls: ['./header.component.css'] // css
})
export class HeaderComponent implements OnInit {

  // ts
  accountName: string;
  // you can subscribe from account data service
  // Step 4 of any to any comp commn -- prev step is in account data service
  constructor(private accountDataService: AccountDataService) { }

  ngOnInit(): void {
    // step 4 continues -- subscribe to the observable
    this.accountDataService.latestAccountName.subscribe((name: any) => {
      console.log(name);
      this.accountName = name; // Step 5 -- refer html for string interpolation
    });
  }

}
