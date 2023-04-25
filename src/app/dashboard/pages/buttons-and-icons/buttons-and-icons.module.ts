import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsAndIconsComponent } from './buttons-and-icons.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ButtonsAndIconsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule, 
  ],
  exports: [
    ButtonsAndIconsComponent
  ],
})
export class ButtonsAndIconsModule { }
