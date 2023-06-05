import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlumnosService } from '../../../alumnos/services/alumnos.service';
import { CursosService } from '../../../cursos/services/cursos.service';
import { Alumno } from '../../../alumnos/alumnos.component';
import { CreateInscripcionData, Curso } from '../../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CursoWithSubject } from '../../../cursos/models';
import { Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from '../../store/inscripciones.actions';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-inscripcion-dialog',
  templateUrl: './inscripcion-dialog.component.html',
  styleUrls: ['./inscripcion-dialog.component.scss']
})
export class InscripcionDialogComponent implements OnInit, OnDestroy{

    alumnos: Alumno[] = [];
    cursos: CursoWithSubject[] = [];

    selectedCourseControl = new FormControl<Curso | null>(null);

    subjectIdControl = new FormControl<number | null>(null, [Validators.required]);
    studentIdControl = new FormControl<number | null>(null, [Validators.required]);
    courseIdControl = new FormControl<number | null>(null, [Validators.required]);

    inscripcionForm = new FormGroup({
      subjectId: this.subjectIdControl,
      studentId: this.studentIdControl,
      courseId: this.courseIdControl,
    });

    destroyed$ = new Subject<void>()
    
    constructor(private alumnosService: AlumnosService, 
      private cursosService: CursosService,
      private dialogRef: DialogRef<InscripcionDialogComponent>,
      private store: Store,) {
      this.selectedCourseControl.valueChanges.pipe(
        takeUntil(this.destroyed$)
      ).subscribe({
        next: (curso) => {
          if (curso) {
          this.subjectIdControl.setValue(curso.subjectId);
          this.courseIdControl.setValue(curso.id);
          }
        }
      });
    }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
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

  onSave(): void{
    this.store.dispatch(
      InscripcionesActions.createInscripcion({
        data: this.inscripcionForm.value as CreateInscripcionData,
      })
    )

    this.dialogRef.close();
  }
}
