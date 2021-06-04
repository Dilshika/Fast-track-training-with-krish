import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TextFieldComponent } from './text-field/text-field.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

isClicked=false;
@ViewChild(TextFieldComponent) childReference:any;
sampleText:any;

  constructor() { }

  ngOnInit(): void {
  }

  display(){
    this.isClicked=true;
    this.sampleText=this.childReference.sampleText;
  }

}
