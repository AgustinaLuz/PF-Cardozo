import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { ObservablesModule } from './pages/observables/observables.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CursosModule } from './pages/cursos/cursos.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { AlumnoDetalleComponent } from './pages/alumnos/pages/alumno-detalle/alumno-detalle.component';
import { CursosComponent } from './pages/cursos/cursos.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    AlumnosModule,
    DirectivesModule,
    ObservablesModule,
    RouterModule,
    MatListModule,
    CursosModule,
    RouterModule.forChild([
      {
          path: 'estudiantes',
          loadChildren: () => import('./pages/alumnos/alumnos.module').then((m) => m.AlumnosModule)
      },
      {
        path: 'cursos',
        component: CursosComponent,
      }
    ])
    
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
