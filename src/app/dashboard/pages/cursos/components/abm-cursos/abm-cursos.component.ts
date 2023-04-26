import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from '../../models';
import { NotificationsService } from 'src/app/core/services/notifications.service';

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.scss']
})
export class AbmCursosComponent implements OnInit {


  nameControl = new FormControl('', [Validators.required]);
  last_nameControl = new FormControl('', [Validators.required]);
  birth_dateControl = new FormControl('', [Validators.required]);

  cursosForm = new FormGroup<any>({
    name: this.nameControl,
    last_name: this.last_nameControl,
    birth_date: this.birth_dateControl
  });


  constructor(private dialogRef: MatDialogRef<AbmCursosComponent>, @Inject(MAT_DIALOG_DATA) public data: Curso, private notificationService: NotificationsService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  guardar(): void {
    if (this.cursosForm.valid) {
      this.dialogRef.close(this.cursosForm.value);
      this.notificationService.mostrarMensaje('El usuario se creo correctamente');
    } else {
      this.cursosForm.markAllAsTouched();
      
    }
  }

  
}
