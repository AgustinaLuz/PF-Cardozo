import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import { ObservablesModule } from '../observables/observables.module';
import { AlumnoDetalleComponent } from './pages/alumno-detalle/alumno-detalle.component';
import { RouterModule } from '@angular/router';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AlumnosComponent,
    AbmAlumnosComponent,
    AlumnoDetalleComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    PipesModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    SharedModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    MatTooltipModule,
    MatSortModule,
    ObservablesModule,
    MatNativeDateModule,
    AlumnosRoutingModule
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: AlumnosComponent
    //   },
    //   {
    //     path: ':id',
    //     component: AlumnoDetalleComponent,
    //   },

    // ]),
    
  ],
  exports: [
    AlumnosComponent
  ]
})
export class AlumnosModule { }
