import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  outputValue:number=0;

  @Output() outputEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(value:number){
    this.outputValue+=value;
    this.outputEvent.emit(this.outputValue);
  }

}
