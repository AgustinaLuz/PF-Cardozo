import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  user: {
    name: string
  }
}
@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.scss']
})
export class UsersDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {} 
}
