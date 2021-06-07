import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value:number=0;
  outputValue:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  recieveValue($event:any){
    this.value=$event;
    this.outputValue=this.findFibonacci(this.value);  
  }

  findFibonacci(value:number):number{
    if( value <= 1){
      return value;
    }else{
      return this.findFibonacci(value-1)+this.findFibonacci(value-2);
    }
  }
}
