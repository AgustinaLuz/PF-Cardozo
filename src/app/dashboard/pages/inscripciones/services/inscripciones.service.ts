import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InscripcionWithAll } from '../models';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  constructor(private httpClient: HttpClient) { }

  getAllInscripciones(): Observable<InscripcionWithAll[]> {
    return this.httpClient.get<InscripcionWithAll[]>(`http://localhost:3000/inscriptions?_expand=course&_expand=student&_expand=subject`)
  }
}
