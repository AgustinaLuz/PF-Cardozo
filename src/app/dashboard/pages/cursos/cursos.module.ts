import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CursosComponent,
    AbmCursosComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    PipesModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatNativeDateModule,
    RouterModule.forChild([
      {
        path: '',
        component: CursosComponent
      }
    ])
  ]
})
export class CursosModule { }
