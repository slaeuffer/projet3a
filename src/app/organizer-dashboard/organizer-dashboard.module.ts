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

@NgModule({
  declarations: [
    DashboardHomeComponent,
    PlanningComponent,
    ContactComponent,
    MyusersComponent,
    ParamsComponent,
  ],
  imports: [
    CommonModule,
    OrganizerDashboardRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
  ]
})
export class OrganizerDashboardModule { }
