import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { OrganizerDashboardRoutingModule } from './organizer-dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardHomeComponent,
  ],
  imports: [
    CommonModule,
    OrganizerDashboardRoutingModule,
  ]
})
export class OrganizerDashboardModule { }
