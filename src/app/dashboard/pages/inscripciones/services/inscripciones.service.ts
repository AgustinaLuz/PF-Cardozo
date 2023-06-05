import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap } from 'rxjs';
import { CreateInscripcionData, Inscripcion, InscripcionWithAll } from '../models';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  constructor(private httpClient: HttpClient) { }

  createInscripcion(data: CreateInscripcionData): Observable<InscripcionWithAll> {
    return this.httpClient
    .post<Inscripcion>(`http://localhost:3000/inscriptions`, data)
    .pipe(
      concatMap((createResponse) =>
        this.getInscripcionesWithAllById(createResponse.id))
    );
  }

  getInscripcionesWithAllById(id:number): Observable<InscripcionWithAll> {
    return this.httpClient.get<InscripcionWithAll>(
      `http://localhost:3000/inscriptions/${id}?_expand=student&_expand=subject&_expand=course`
    )
  }

  getAllInscripciones(): Observable<InscripcionWithAll[]> {
    return this.httpClient.get<InscripcionWithAll[]>(`http://localhost:3000/inscriptions?_expand=course&_expand=student&_expand=subject`);
  }

  deleteInscripcioneById(id: number): Observable<unknown> {
    return this.httpClient.delete(`http://localhost:3000/inscriptions/${id}`);
  }
}
