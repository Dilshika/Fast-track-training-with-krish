import { Component, OnInit } from '@angular/core';
import { AnagramService } from 'src/app/_service/anagram.service';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {

  title='Check if two words are angaram or not'
  firstWord:string='';
  secondWord:string='';
  errorMessage:string='';
  response:boolean=false;
  displayResponse:string='';
  isClicked:boolean=false;

  constructor(private anagramService:AnagramService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
     this.anagramService.sendWords(this.firstWord,this.secondWord).subscribe(data=>{
      this.response=data;
      this.isClicked=true;
        if(this.response){
          this.displayResponse="Is a Angram";
        }else{
          this.displayResponse="Is not a Angram"
        }
     });

     
  }


  reset(){
    this.firstWord='';
    this.secondWord='';
    this.isClicked=false;
  }

}
