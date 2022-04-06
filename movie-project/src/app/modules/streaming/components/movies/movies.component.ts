import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Video } from 'src/app/models/video';
import { VideoData } from 'src/app/models/video-data';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  pageTitle: string = 'popular movies';
  videoDataSubscription: Subscription;
  videoList: Video[];
  hasHttpError: boolean = false;

  movies = [
    {
      route: 'movie',
    },
    {
      route: 'series',
    },
    {
      route: 'movie',
    },
    {
      route: 'series',
    },
  ];
  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.getAllVideos();
  }

  getAllVideos(): void {
    try {
      this.videoDataSubscription = this.videoService
        .getVideos()
        .subscribe((response: VideoData) => {
          if (response?.entries) {
            this.videoList = response.entries;
            console.log('ss', this.videoList);
            this.getMovies();
          }
        });
    } catch (error) {
      error.message = `HomeComponent::getAllVideos() - ${error.message}`;
      throw error;
    }
  }

  getMovies(): void {
    debugger;
    console.log('movies are', this.videoList);
    const movies = this.videoList
      ?.filter((movie: Video) => {
        return movie.programType === 'movie' && movie.releaseYear >= 2010;
      })
      .filter((movies: Video, index: number) => {
        return index < 21;
      })
      .sort((a, b) => (a.title > b.title ? 1 : -1));
  }
}
