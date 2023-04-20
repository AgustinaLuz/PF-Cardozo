import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiante } from '../tables.component';
import { NotificationsService } from 'src/app/core/services/notifications.service';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent implements OnInit {

  nameControl = new FormControl('', [Validators.required]);
  last_nameControl = new FormControl('', [Validators.required]);
  birth_dateControl = new FormControl('', [Validators.required]);

  alumnosForm = new FormGroup<any>({
    name: this.nameControl,
    last_name: this.last_nameControl,
    birth_date: this.birth_dateControl
  });


  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>, @Inject(MAT_DIALOG_DATA) public data: Estudiante, private notificationService: NotificationsService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  guardar(): void {
    if (this.alumnosForm.valid) {
      this.dialogRef.close(this.alumnosForm.value);
      this.notificationService.mostrarMensaje('El usuario se creo correctamente');
    } else {
      this.alumnosForm.markAllAsTouched();
      
    }
  }

  
}
