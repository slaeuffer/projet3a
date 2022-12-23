import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component'
import { PlanningComponent } from './planning/planning.component';

const routes: Routes = [
    { path: '',
      children: [
        {
          path: '',
          component: DashboardHomeComponent,
        },
        {
          path: 'planning',
          component: PlanningComponent,
        },
      ]
    }
];
 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrganizerDashboardRoutingModule {}