import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargestNumberComponent } from './largest-number/largest-number.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LargestNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LargestNumberModule { }
