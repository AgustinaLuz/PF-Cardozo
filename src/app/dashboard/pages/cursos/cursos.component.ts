import { Component, OnInit } from '@angular/core';
import { CursosService } from './services/cursos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from './models';
import { MatDialog } from '@angular/material/dialog';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{


  dataSource = new MatTableDataSource();

  displayedColumns = ['id', 'name', 'start_date','end_date', 'see_details', 'acciones'];

  constructor(private cursosService: CursosService, private dialog: MatDialog) {}

  ngOnInit(): void {
      this.cursosService.obtenerCursos()
        .subscribe({
          next: (cursos) => {
            this.dataSource.data = cursos;
          }
        });
  }

  crearCurso(): void {
    const dialog = this.dialog.open(AbmCursosComponent);

    dialog.afterClosed()
    .subscribe((formValue) => {
      if (formValue) {
      this.cursosService.crearCurso(formValue)
      }
    })

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
