import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Alumno } from '../tables.component';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


  private estudiantes$ = new BehaviorSubject<Alumno[]>([
 
      {
        id: 1,
        name: 'Aida',
        last_name: 'Ovejero',
        birth_date: new Date()
      },
      {
        id: 2,
        name: 'Julieta',
        last_name: 'Cardozo',
        birth_date: new Date()
      },
      {
        id: 3,
        name: 'Joaquin',
        last_name: 'Fiora',
        birth_date: new Date()
      },
      {
        id: 4,
        name: 'Julio',
        last_name: 'Fiora',
        birth_date: new Date()
      },
    ])

    constructor() { }

    obtenerAlumnos(): Observable<Alumno[]>{

    return this.estudiantes$.asObservable();

    
  }
  obtenerAlumnoPorId(id: number): Observable<Alumno | undefined> {
    return this.estudiantes$.asObservable()
      .pipe(
        map((alumnos) => alumnos.find((a) => a.id === id))
      )
  }
}
