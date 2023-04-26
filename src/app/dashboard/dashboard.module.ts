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
    
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
