import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  //Lazy Loading
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: './pages/auth/auth.module#AuthPageModule'
  },
  {
    path: 'movies',
    loadChildren: './pages/movies/movies.module#MoviesPageModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'movie-details',
    loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule',
    canLoad: [AuthGuard]
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
