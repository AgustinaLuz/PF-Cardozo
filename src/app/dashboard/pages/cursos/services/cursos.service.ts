import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable ,map, mergeMap, pipe, take, tap } from 'rxjs';
import { CrearCursoPayload, Curso, CursoWithSubject } from '../models';
import { HttpClient } from '@angular/common/http';

const CURSOS_MOCKS: Curso[] = [
  {
    id: 1,
    subjectId: 3,
    start_date: new Date(),
    end_date: new Date(),
  },
  {
    id: 2,
    subjectId: 3,
    start_date: new Date(),
    end_date: new Date(),
  },
  {
    id: 3,
    subjectId: 3,
    start_date: new Date(),
    end_date: new Date(),
  },
];


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos$ = new BehaviorSubject<Curso[]>([]);

  constructor(
    private HttpClient: HttpClient
  ) { }

  get cursos(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }

  // obtenerCursos(): void {
    
  //   this.HttpClient.get<Curso[]>(`http://localhost:3000/courses`)
  //     .subscribe({
  //       next: (cursos) => {
  //         this.cursos$.next(cursos);
  //       }
  //     })
  // }
  
  obtenerCursos(): Observable<Curso[]> {
    return this.HttpClient.get<Curso[]>(`http://localhost:3000/courses?_expand=subject`)
    .pipe(
      tap((cursos) => this.cursos$.next(cursos)),
      mergeMap(() => this.cursos$.asObservable())
    );
  }
  obtenerCursosWithSubject(): Observable<CursoWithSubject[]> {
    return this.HttpClient.get<CursoWithSubject[]>(`http://localhost:3000/courses?_expand=subject`
    )
    .pipe(
      tap((cursos) => this.cursos$.next(cursos))
    );
  }
 

  getCursoById(cursoId: number): Observable<Curso | undefined> {
    return this.cursos$.asObservable()
    .pipe(
      map((cursos) => cursos.find((c) => c.id === cursoId))
    )
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


  editarCurso(cursoId: number, actualizacion: Partial<Curso>): Observable<Curso[]> {
    this.cursos$
    .pipe(
      take(1)
    )
    .subscribe({
      next: (cursos) => {
        const cursosActualizados = cursos.map((curso) => {
          if  (curso.id === cursoId) {
            return {
              ...curso,
              ...actualizacion,
            }
          } else {
            return curso;
          }
        })
        this.cursos$.next(cursosActualizados);
      },
    });
    return this.cursos$.asObservable();
  }

  eliminarCurso(cursoId: number): Observable<Curso[]> {
    this.cursos$
    .pipe(
      take(1)
    )
    .subscribe({
      next: (cursos) => {
        const cursosActualizados = cursos.filter((curso) => curso.id !== cursoId)

        this.cursos$.next(cursosActualizados);
      },
    });
    return this.cursos$.asObservable();
  }

}
