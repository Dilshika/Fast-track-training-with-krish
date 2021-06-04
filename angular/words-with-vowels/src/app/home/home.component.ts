import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title='Enter paragraph to filter out words with vowels';
  submitted:boolean=false;
  paragraph:string='';
 

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.submitted=true;
  }

  onClear(){
    this.submitted=false;
    this.paragraph='';
    
  }

  
}
