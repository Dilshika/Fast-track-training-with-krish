import { Component, OnInit } from '@angular/core';
import { LargestNumberService } from 'src/app/_service/largest-number.service';

@Component({
  selector: 'app-largest-number',
  templateUrl: './largest-number.component.html',
  styleUrls: ['./largest-number.component.scss']
})
export class LargestNumberComponent implements OnInit {
  title:string='';
  dataArray:number[]=[];
  value:number=0;
  data:number=0;
  displayData:number=0;
  isClicked:boolean=false;
  constructor(private service:LargestNumberService) { }

  ngOnInit(): void {
  }

  addtoArray(){
    this.dataArray.push(this.data);
    console.log(this.dataArray);
  }
  
  onSubmit(){
    this.service.sendValue(this.dataArray,this.value).subscribe(
      data=>this.displayData=data
    );
    this.isClicked=true;
  }

}

