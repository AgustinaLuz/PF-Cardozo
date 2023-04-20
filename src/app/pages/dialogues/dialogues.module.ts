import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialoguesComponent } from './dialogues.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UsersDialogComponent } from './my-dialogues/users-dialog/users-dialog.component';



@NgModule({
  declarations: [
    DialoguesComponent,
    UsersDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    DialoguesComponent
  ]
})
export class DialoguesModule { }
