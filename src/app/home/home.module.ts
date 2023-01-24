import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostDetailComponent } from './post-list/post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostRowComponent } from './post-list/post-row/post-row.component';

export const HOME_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:id', component: PostDetailComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PostListComponent,
    PostRowComponent,
    PostDetailComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES), HomeModule],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
