import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  outputDate:Date;

  @Output() outputEvent= new EventEmitter<Date>();

  ngOnInit(): void {
  }

  onSubmit(){
    this.outputEvent.emit(this.outputDate);
  }

}
