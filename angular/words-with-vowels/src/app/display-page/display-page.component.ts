import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.scss']
})
export class DisplayPageComponent implements OnInit {


  @Input() paragraph:string='';
  resultArray:string[]=[];
  constructor() { }

  ngOnInit(): void {
    this.findWordsWithVowels();
  }


  findWordsWithVowels(){
    const words= this.paragraph.toLocaleLowerCase().split(" ");
    for(let word of words){
      if(word.charAt(0).match(/[aeiou]/g)){
        this.resultArray.push(word);
      }
    }
     console.log(this.resultArray.sort());
     return this.resultArray.sort();
   }
}
