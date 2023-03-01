import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHomeComponent } from './public-home/public-home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { PublicRoutingModule } from './public-routing.module';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SideCardComponent } from './components/side-card/side-card.component';
import { HeaderComponent } from './components/header/header.component';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { ReviewsDialogComponent } from './components/reviews-dialog/reviews-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommentboxComponent } from './components/commentbox/commentbox.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ChildboxComponent } from './components/childbox/childbox.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicHomeComponent,
    SideCardComponent,
    HeaderComponent,
    ReviewsDialogComponent,
    CommentboxComponent,
    CommentsComponent,
    ChildboxComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ]
})
export class PublicModule { }
