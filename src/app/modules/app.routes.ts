import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies/movies.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'filmes', pathMatch: 'full' },
    { path: 'filmes', component: MoviesComponent },
    { path: 'filmes/:id', component: MoviesDetailComponent }
];

export const routing = RouterModule.forRoot(routes);