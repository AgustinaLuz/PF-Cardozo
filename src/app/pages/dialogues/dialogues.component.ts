import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './my-dialogues/users-dialog/users-dialog.component';


@Component({
  selector: 'app-dialogues',
  templateUrl: './dialogues.component.html',
  styleUrls: ['./dialogues.component.scss']
})
export class DialoguesComponent {

  constructor(
    private dialogService: MatDialog
  ) {}

  openDialoguesOfUsers(): void{
    const dialog = this.dialogService.open(UsersDialogComponent, {
      data: {
        user: {
          name: 'luz'
        }
      }
    });

    dialog.afterClosed()
      .subscribe((valor) => console.log(valor));
}

}