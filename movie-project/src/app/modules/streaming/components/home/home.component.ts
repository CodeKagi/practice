import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VideoService } from '../../../../services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pageTitle: string = 'popular titles';
  videoDataSubscription: Subscription;
  videoList: Video[];
  hasHttpError: boolean = false;

  videos = [
    {
      name: 'movies',
    },

    {
      name: 'series',
    },
  ];
  constructor(private videoService : VideoService) {}

  ngOnInit(): void {
     this.getAllVideos();
  }

  getAllVideos(): void {
    try {
      this.videoDataSubscription = this.videoService.filterProgramTypes().subscribe(response => {
        if(response) {
          this.videoList = response;
        }
        console.log("video list is",this.videoList);
      })
    } catch (error) {
      error.message = `HomeComponent::getAllVideos() - ${error.message}`;
      throw error
    }

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.videoDataSubscription) this.videoDataSubscription.unsubscribe();
  }
}
