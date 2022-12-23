import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { OrganizerDashboardRoutingModule } from './organizer-dashboard-routing.module';
import { PlanningComponent } from './planning/planning.component';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    PlanningComponent,
  ],
  imports: [
    CommonModule,
    OrganizerDashboardRoutingModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class OrganizerDashboardModule { }
