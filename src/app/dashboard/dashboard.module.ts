import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ButtonsAndIconsModule } from '../pages/buttons-and-icons/buttons-and-icons.module';
import { FormsModule } from '@angular/forms';
import { FormulariosModule } from '../pages/formularios/formularios.module';
import { DialoguesModule } from '../pages/dialogues/dialogues.module';
import { TablesModule } from '../pages/tables/tables.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { ObservablesModule } from '../pages/observables/observables.module';

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
    ButtonsAndIconsModule,
    FormsModule,
    FormulariosModule,
    DialoguesModule,
    TablesModule,
    DirectivesModule,
    ObservablesModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
