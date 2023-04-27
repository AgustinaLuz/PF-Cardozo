import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { CrearCursoPayload, Curso } from '../models';

const CURSOS_MOCKS: Curso[] = [
  {
    id: 1,
    name: 'Angular',
    start_date: new Date(),
    end_date: new Date(),
  },
  {
    id: 2,
    name: 'Angular',
    start_date: new Date(),
    end_date: new Date(),
  },
  {
    id: 3,
    name: 'Angular',
    start_date: new Date(),
    end_date: new Date(),
  },
];


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos$ = new BehaviorSubject<Curso[]>([]);

  constructor() { }


  obtenerCursos(): Observable<Curso[]> {
    this.cursos$.next(CURSOS_MOCKS);
    return this.cursos$.asObservable();
  }

  crearCurso(payload: CrearCursoPayload): Observable<Curso[]> {
    this.cursos$
    .pipe(
      take(1)
    )
    .subscribe({
      next: (cursos) => {
        this.cursos$.next([
          ...cursos,
          {
            id: cursos.length + 1,
            ...payload,
          },
        ]);
      },
    });

    return this.cursos$.asObservable();
  }
}
