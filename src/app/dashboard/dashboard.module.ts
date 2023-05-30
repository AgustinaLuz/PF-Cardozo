import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { ObservablesModule } from './pages/observables/observables.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CursosComponent } from './pages/cursos/cursos.component';
import { AdminGuard } from '../auth/guards/admin.guard';

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
    DirectivesModule,
    ObservablesModule,
    RouterModule,
    MatListModule,
    RouterModule.forChild([
      {
          path: 'estudiantes',
          loadChildren: () => import('./pages/alumnos/alumnos.module').then((m) => m.AlumnosModule)
      },
      {
          path: 'cursos',
          loadChildren: () => import('./pages/cursos/cursos.module').then((m) => m.CursosModule),
      },
      {
        path: 'inscripciones',
        loadChildren: () => import('./pages/inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
      }
    ])
    
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
