import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../../alumnos/services/alumnos.service';
import { Alumno } from '../../../alumnos/alumnos.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripcion-dialog',
  templateUrl: './inscripcion-dialog.component.html',
  styleUrls: ['./inscripcion-dialog.component.scss']
})
export class InscripcionDialogComponent implements OnInit{

    alumnos: Alumno[] = [];

    subjectIdControl = new FormControl(null, [Validators.required]);
    studentIdControl = new FormControl(null, [Validators.required]);
    courseIdControl = new FormControl(null, [Validators.required]);

    inscripcionForm = new FormGroup({
      subjectId: this.subjectIdControl,
      studentId: this.studentIdControl,
      courseId: this.courseIdControl,
    })
    
    constructor(private alumnosService: AlumnosService) {
      this.inscripcionForm.valueChanges.subscribe(console.log);
    }

  ngOnInit(): void {
    this.alumnosService.getStudentsFromDB()
      .subscribe({
        next: (res) => {
          this.alumnos = res;
        }
      })
  }
}
