import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../models';

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
]


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
}
