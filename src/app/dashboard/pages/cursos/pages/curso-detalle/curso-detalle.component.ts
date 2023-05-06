import { Component } from '@angular/core';
import { Curso } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.scss']
})
export class CursoDetalleComponent {
  curso: Curso | undefined;

  private destroyed$ = new Subject()

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursosService: CursosService,
  ) {
    this.cursosService.getCursoById(parseInt(this.activatedRoute.snapshot.params['id']))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((curso) => this.curso = curso);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
  
}
