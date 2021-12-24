import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

import './_content/app.less';
import { Customer } from './models/customer';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }


    public cust:Customer[] = [
        {name:"Savio",acno:1001,acbal:456},
      ]

    public handleAddNewCustomer(data:Customer){
        this.cust.push(data)
      }

      userno:number=0;
  ammount:number=0;
  actno:number=0;

  duserno:number=0;
  deposit:number=0;

  ruserno:number=0;
  rdeposit:number=0;

  rtime:string=" ";

  public doSendDeposit(){
    for(let i=0;i<this.cust.length;i++){
      console.log("1");
      if(this.cust[i].acno==this.duserno)
      {
        console.log("2");
        this.cust[i].acbal+=this.deposit;
      }
    }

  }

  public doSendFunds(){
    for(let i=0;i<this.cust.length;i++){
      if(this.cust[i].acno==this.actno)
      {
        this.cust[i].acbal+=this.ammount;
      }
      if(this.cust[i].acno==this.userno)
      {
        this.cust[i].acbal-=this.ammount
      }
    }
  }

}