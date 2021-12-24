import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  acno:number=0;
  name:string="";
  acbal:number=0;

  cactno:number=0;
  cammount:number=0;

    @Input()
    customers:Customer[]=[];

  // @Output()
  // addNewCustomerEmitter:EventEmitter<Customer> = new EventEmitter();

  public cust:Customer[] = [
    {name:"Savio",acno:1001,acbal:456},
  ]

public handleAddNewCustomer(){
    let newC:Customer = new Customer(this.name,this.acno,this.acbal);
    this.cust.push(newC)
  }


  // handleAddCustomer(){
   
  //   let newC:Customer = new Customer(this.name,this.acno,this.acbal);
  //   this.addNewCustomerEmitter.emit(newC);

  // }
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
 
  

  ngOnInit(): void {

    
           
      
      }
    
}
    
 
 
  


