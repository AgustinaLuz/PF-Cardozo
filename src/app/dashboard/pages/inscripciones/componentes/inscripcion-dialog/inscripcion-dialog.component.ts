import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../../alumnos/services/alumnos.service';
import { CursosService } from '../../../cursos/services/cursos.service';
import { Alumno } from '../../../alumnos/alumnos.component';
import { Curso } from '../../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CursoWithSubject } from '../../../cursos/models';


@Component({
  selector: 'app-inscripcion-dialog',
  templateUrl: './inscripcion-dialog.component.html',
  styleUrls: ['./inscripcion-dialog.component.scss']
})
export class InscripcionDialogComponent implements OnInit{

    alumnos: Alumno[] = [];
    cursos: CursoWithSubject[] = [];

    subjectIdControl = new FormControl(null, [Validators.required]);
    studentIdControl = new FormControl(null, [Validators.required]);
    courseIdControl = new FormControl(null, [Validators.required]);

    inscripcionForm = new FormGroup({
      subjectId: this.subjectIdControl,
      studentId: this.studentIdControl,
      courseId: this.courseIdControl,
    })
    
    constructor(private alumnosService: AlumnosService, private cursosService: CursosService) {
      this.inscripcionForm.valueChanges.subscribe(console.log);
    }

  ngOnInit(): void {
    
    this.alumnosService.getStudentsFromDB()
      .subscribe({
        next: (res) => {
          this.alumnos = res;
        }
      })
    this.cursosService.obtenerCursosWithSubject()
      .subscribe({
        next: (res) => {
          console.log(res); // Check the received data in the console
          this.cursos = res;
        }
      });
  }
}
