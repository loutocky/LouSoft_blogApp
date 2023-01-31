import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostDetailComponent } from './post-list/post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostRowComponent } from './post-list/post-row/post-row.component';
import { BannerComponent } from './banner/banner.component';
import { NgParticlesModule } from "ng-particles";

export const HOME_ROUTES: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: PostListComponent },
    { path: 'post/:id', component: PostDetailComponent },
  ] },
];

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PostListComponent,
    PostRowComponent,
    PostDetailComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule, SharedModule, NgParticlesModule,
  ]
})
export class HomeModule { }

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES), HomeModule],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
