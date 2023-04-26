import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from './services/alumnos.service';

export interface Alumno {
  id: number;
  name: string;
  last_name: string;
  birth_date: Date;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {



  dataSource = new MatTableDataSource<Alumno>();

  displayedColumns: string[] = ['id', 'full_name', 'birth_date', 'see_details','acciones'];

  @ViewChild(MatSort) sort!: MatSort;
  estudiantes: any;
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  
  eliminarUsuario(index: number){
    this.estudiantes.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.estudiantes);
  }

  applyFilters(ev: Event): void{
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }
  
  constructor(
    private matDialog: MatDialog, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService,
    ) {
      this.alumnosService.obtenerAlumnos()
        .subscribe((alumnos) => {
          this.dataSource.data = alumnos;
        })
      
    }
  
  goToDetails(userId: number): void{
    this.router.navigate([userId], {
      relativeTo: this.activatedRoute,
    });
  }

  modificarUsuario(index: number) {
    const user = this.estudiantes[index];
    const dialog = this.matDialog.open(AbmAlumnosComponent, { data: user })
    dialog.afterClosed().subscribe((valor) => {
      this.estudiantes[index] = valor;
      this.dataSource = new MatTableDataSource(this.estudiantes);
    })
  }
  
  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor, 
            id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }
}