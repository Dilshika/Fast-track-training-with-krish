import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  inputNumber:number=0;
  isClicked:boolean=false;
  @Output() sendValueEvent=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  sendValue(inputNumber:string){
    this.sendValueEvent.emit(+inputNumber);
    this.isClicked=true;
  }

}
