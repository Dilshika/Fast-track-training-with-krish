import { Component, OnInit } from '@angular/core';
import { CountOccuranceService } from 'src/app/_service/count-occurance.service';

@Component({
  selector: 'app-count-occurance',
  templateUrl: './count-occurance.component.html',
  styleUrls: ['./count-occurance.component.scss']
})
export class CountOccuranceComponent implements OnInit {

  sentence:string='';
  displayMap:[][]=[];
  isClicked:boolean=false;
  
  constructor(private service:CountOccuranceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.countOccurance(this.sentence).subscribe(
      (data)=>{
        this.isClicked=true;
        this.displayMap=data;    
      }
    )
  }

  reset(){
    this.isClicked=false;
    this.sentence='';
  }

}
