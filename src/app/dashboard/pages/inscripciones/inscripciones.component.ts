import { Component, OnInit } from '@angular/core';
import { InscripcionesService } from './services/inscripciones.service';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit{
  constructor(
    private inscripcionesService: InscripcionesService,
    private store: Store,
    ) {}
  ngOnInit(): void {
    //this.inscripcionesService.getAllInscripciones().subscribe(console.log);
    this.store.dispatch(InscripcionesActions.loadInscripciones())
  }
}
