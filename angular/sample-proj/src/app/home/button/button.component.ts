import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  
  @Output() clickEvent= new EventEmitter<string>();


  ngOnInit(): void {
  }

  onSubmit(){
    this.clickEvent.emit();
  }

}
