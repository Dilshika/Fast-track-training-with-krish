import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  @Input() paragraph:string='';
  resultArray:string[]=[];
  constructor() { }

  ngOnInit(): void {
    this.findWordsWithVowels();
  }


  findWordsWithVowels(){
    let words= this.paragraph.toLocaleLowerCase().split(" ");
    for(let word of words){
      if(word.charAt(0).match(/[aeiou]/g)){
        this.resultArray.push(word);
      }
    }
     return this.resultArray.sort();
   }
}
