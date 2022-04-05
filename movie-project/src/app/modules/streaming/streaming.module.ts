import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamingRoutingModule } from './streaming-routing.module';
import { StreamingDashboardComponent } from './components/streaming-dashboard/streaming-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { VideoThumbnailComponent } from 'src/app/components/video-thumbnail/video-thumbnail.component';

@NgModule({
  declarations: [
    StreamingDashboardComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    FooterComponent,
    HeaderComponent,
    VideoThumbnailComponent,
  ],
  imports: [CommonModule, StreamingRoutingModule],
})
export class StreamingModule {}
