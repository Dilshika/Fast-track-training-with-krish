import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagramComponent } from './anagram/anagram/anagram.component';
import { CountOccuranceComponent } from './count-occurence/count-occurance/count-occurance.component';
import { HomeComponent } from './home/home.component';
import { LargestNumberComponent } from './largest-number/largest-number/largest-number.component';

const routes: Routes = [{
  path:'anagram',component:AnagramComponent,
},
{
  path:'',component:HomeComponent
},
{
  path:'count-occurance',component:CountOccuranceComponent,
},
{
  path:'largestNumber',component:LargestNumberComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
