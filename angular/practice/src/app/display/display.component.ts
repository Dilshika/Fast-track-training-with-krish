import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  displayValue:number=0;
  isEven=false;

  constructor() { }

  ngOnInit(): void {
  }

  onReceiveValue($event:number){
      this.displayValue=$event;
      this.checkIfEven(this.displayValue)
  }

  checkIfEven(value:number){
    
    if((value%2) === 0){
      this.isEven=true;
      console.log(this.isEven);
    }else{
      this.isEven=false;
    }
  }

}
