import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';


@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  constructor() { }
  userno:number=0;
  ammount:number=0;
  actno:number=0;

  duserno:number=0;
  deposit:number=0;

  ruserno:number=0;
  rdeposit:number=0;

  rtime:string=" ";



  public cust:Customer[] = [
    {name:"Savio",acno:1001,acbal:456},
  ]

  public handleAddNewCustomer(data:Customer){
    this.cust.push(data)
  }
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

  
  dob:Date = new Date();
  public getDate(){
    return this.dob.getDay();
  }
  
  // Time: any = ['Daily', 'Weekly', 'Monthly', 'Yearly']

  // public onChange(event:any): void {  // event will give you full breif of action
  //   this.rtime = event.target.value;
  //   console.log(rtim);
  // }

  

  
  ngOnInit(): void {
  }


}
