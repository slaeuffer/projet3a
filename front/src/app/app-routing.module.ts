import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'orga',
        loadChildren: () => import('./organizer-dashboard/organizer-dashboard.module').then(mod => mod.OrganizerDashboardModule)
      },
      {
        path: 'public',
        loadChildren: () => import('./public/public.module').then(mod => mod.PublicModule)
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [IsLoggedGuard],
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
