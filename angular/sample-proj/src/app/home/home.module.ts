import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ButtonComponent } from './button/button.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { LabelComponent } from './label/label.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ButtonComponent,
    TextFieldComponent,
    LabelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
