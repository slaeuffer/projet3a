import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHomeComponent } from './public-home/public-home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [
    PublicHomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class PublicModule { }
