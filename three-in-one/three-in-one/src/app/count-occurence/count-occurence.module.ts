import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountOccuranceComponent } from './count-occurance/count-occurance.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CountOccuranceComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CountOccurenceModule { }
