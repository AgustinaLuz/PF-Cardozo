import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
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
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { CheckboxModule } from 'primeng/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import { ObservablesModule } from '../observables/observables.module';

@NgModule({
  declarations: [
    TablesComponent,
    AbmAlumnosComponent
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
    MatPseudoCheckboxModule,
    CheckboxModule,
    FormsModule,
    MatTooltipModule,
    MatSortModule,
    ObservablesModule, 
    
  ],
  exports: [
    TablesComponent
  ]
})
export class TablesModule { }
