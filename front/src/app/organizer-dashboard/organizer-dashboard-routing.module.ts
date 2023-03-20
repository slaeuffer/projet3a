import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from '../guards/is-logged.guard';
import { ContactComponent } from './contact/contact.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component'
import { MyusersComponent } from './myusers/myusers.component';
import { ParamsComponent } from './params/params.component';
import { PlanningComponent } from './planning/planning.component';

const routes: Routes = [
    { path: '',
      canActivate: [IsLoggedGuard],
      children: [
        {
          path: '',
          component: DashboardHomeComponent,
          canActivate: [IsLoggedGuard],
        },
        {
          path: 'planning',
          component: PlanningComponent,
          canActivate: [IsLoggedGuard],
        },
        {
          path: 'contact',
          component: ContactComponent,
          canActivate: [IsLoggedGuard],
        },
        {
          path: 'myusers',
          component: MyusersComponent,
          canActivate: [IsLoggedGuard],
        },
        {
          path: 'params',
          component: ParamsComponent,
          canActivate: [IsLoggedGuard],
        },
      ]
    }
];
 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrganizerDashboardRoutingModule {}