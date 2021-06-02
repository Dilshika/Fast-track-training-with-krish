import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title='Find fibonacci number at a given index';
  inputNumber:any;
  outputNumber:any;
  clickedEnter:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }


  submitNumber():void{
    this.clickedEnter=true;
    this.outputNumber=this.findFibonacci(this.inputNumber);  
  }

  findFibonacci(value:number):number{
    if( value <= 1){
      return value;
    }else{
      return this.findFibonacci(value-1)+this.findFibonacci(value-2);
    }
  }

  clearNumber():void{
    this.clickedEnter=false;
    this.inputNumber='';
  }

  

}
