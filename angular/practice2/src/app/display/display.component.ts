import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  displayDate:Date=new Date();
  isDateSet=false;

  constructor() { }

  ngOnInit(): void {
  }

  getDate($event:Date){
    this.displayDate=$event;
    this.isDateSet=true;
  }

}
