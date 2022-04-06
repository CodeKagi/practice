import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VideoService } from '../../../../services/video.service';
import { VideoData } from 'src/app/models/video-data';

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

  constructor() {}

  videoType = [
    {
      route: 'movies'
    },
    {
      route : 'series'
    }
   ]
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.videoDataSubscription) this.videoDataSubscription.unsubscribe();
  }
}
