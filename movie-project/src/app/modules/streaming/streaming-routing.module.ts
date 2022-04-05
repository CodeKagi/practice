import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { StreamingDashboardComponent } from './components/streaming-dashboard/streaming-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: StreamingDashboardComponent,
    children: [
      {
        path: 'demo-streaming',
        component: HomeComponent,
        data: { title: 'Popular Titles' },
      },
      { path: 'movies', component: MoviesComponent },
      { path: 'series', component: SeriesComponent },
      { path: '', redirectTo: 'demo-streaming', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamingRoutingModule {}
