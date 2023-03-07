import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { OrganizerDashboardRoutingModule } from './organizer-dashboard-routing.module';
import { PlanningComponent } from './planning/planning.component';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ContactComponent } from './contact/contact.component';
import { MyusersComponent } from './myusers/myusers.component';
import { ParamsComponent } from './params/params.component';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { PlanningDialogComponent } from './planning-dialog/planning-dialog.component';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    DashboardHomeComponent,
    PlanningComponent,
    ContactComponent,
    MyusersComponent,
    ParamsComponent,
    PlanningDialogComponent,
  ],
  imports: [
    CommonModule,
    OrganizerDashboardRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    NgxChartsModule,
  ]
})
export class OrganizerDashboardModule { }
