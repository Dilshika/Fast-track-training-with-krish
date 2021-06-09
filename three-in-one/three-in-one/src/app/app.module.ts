import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnagramModule } from './anagram/anagram.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountOccurenceModule } from './count-occurence/count-occurence.module';
import { LargestNumberModule } from './largest-number/largest-number.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnagramModule,
    CountOccurenceModule,
    LargestNumberModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
