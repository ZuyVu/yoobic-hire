import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Lazy Loading
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: './pages/auth/auth.module#AuthPageModule'
  },
  {
    path: 'movies',
    loadChildren: './pages/movies/movies.module#MoviesPageModule'
  },
  {
    path: 'movie-details',
    loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule'
  }
,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
