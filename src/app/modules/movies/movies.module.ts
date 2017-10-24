import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MoviesService } from './movies.service';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [MoviesComponent, MoviesDetailComponent],
  providers: [MoviesService]
})
export class MoviesModule { }
