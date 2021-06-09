import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnagramComponent } from './anagram/anagram.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AnagramComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports:[AnagramComponent]
})
export class AnagramModule { }
