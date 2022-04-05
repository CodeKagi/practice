import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pageTitle: string = 'popular titles';
  videoDataSubscription: Subscription;
  videoList: Video[];

  videos = [
    {
      name: 'movies',
    },

    {
      name: 'series',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    // this.getAllVideos();
  }
  // getAllVideos(): void {
  //   this.videoDataSubscription = this.videoService.getVideos().subscribe(response => {

  //   })
  // }
}
