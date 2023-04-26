import { Component, OnInit } from '@angular/core';
import { CursosService } from './services/cursos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from './models';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{


  dataSource = new MatTableDataSource();

  displayedColumns = ['id', 'name', 'start_date','end_date', 'see_details', 'acciones'];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
      this.cursosService.obtenerCursos()
        .subscribe({
          next: (cursos) => {
            this.dataSource.data = cursos;
          }
        });
  }

  crearCurso(): void {

  }

  applyFilters(ev: Event): void{

  }

  goToDetails(cursoId: number): void{

  }

  modificarCurso(curso: Curso): void {

  }

  eliminarCurso(curso: Curso): void {

  }

}
