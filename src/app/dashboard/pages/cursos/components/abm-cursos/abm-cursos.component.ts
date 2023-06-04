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
export class AbmCursosComponent {

  nameControl = new FormControl('', [Validators.required]);
  start_dateControl = new FormControl('', [Validators.required]);
  end_dateControl = new FormControl('', [Validators.required]);

  cursosForm = new FormGroup<any>({
    name: this.nameControl,
    start_date: this.start_dateControl,
    end_date: this.end_dateControl
  });


  constructor(private dialogRef: MatDialogRef<AbmCursosComponent>, @Inject(MAT_DIALOG_DATA) private data: any, private notificationService: NotificationsService) {
    if (data) {
      const cursoParaEditar = data.curso;
      this.nameControl.setValue(cursoParaEditar.name);
      this.start_dateControl.setValue(cursoParaEditar.start_date);
      this.end_dateControl.setValue(cursoParaEditar.end_date);
    }
  }



  guardar(): void {
    if (this.cursosForm.valid) {
      this.dialogRef.close(this.cursosForm.value);
      this.notificationService.mostrarMensaje('El curso se creo correctamente');
    } else {
      this.cursosForm.markAllAsTouched();
      
    }
  }
  eliminarCurso(): void {
    if (this.cursosForm.valid) {
      this.notificationService.mostrarMensaje('El curso se elimino correctamente');
    } else {
      this.cursosForm.markAllAsTouched();
      
    }
  }

  
}
