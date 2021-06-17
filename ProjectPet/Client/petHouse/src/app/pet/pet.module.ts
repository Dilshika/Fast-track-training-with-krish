import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { DisplayPageComponent } from './display-page/display-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPetComponent } from './add-pet/add-pet.component';



@NgModule({
  declarations: [
    TableComponent,
    DisplayPageComponent,
    AddPetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[DisplayPageComponent]
})
export class PetModule { }
