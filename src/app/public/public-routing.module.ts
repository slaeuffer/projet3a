import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicHomeComponent } from './public-home/public-home.component';

const routes: Routes = [
    { path: '',
      children: [
        {
            path: '',
            component: PublicHomeComponent,
        }
      ]
    }
];
 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}