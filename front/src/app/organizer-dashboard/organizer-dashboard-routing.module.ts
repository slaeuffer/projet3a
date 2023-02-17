import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component'
import { MyusersComponent } from './myusers/myusers.component';
import { ParamsComponent } from './params/params.component';
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
        {
          path: 'contact',
          component: ContactComponent,
        },
        {
          path: 'myusers',
          component: MyusersComponent,
        },
        {
          path: 'params',
          component: ParamsComponent,
        },
      ]
    }
];
 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrganizerDashboardRoutingModule {}