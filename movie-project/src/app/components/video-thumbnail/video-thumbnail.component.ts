import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export class VideoThumbnailComponent implements OnInit {
  @Input() videoUrl: string;
  @Input() videoType: string;
  @Input() videoTitle: string;

  constructor() {}

  ngOnInit(): void {
    console.log("program types are", this.videoType)
  }

  getVideoRoute(videoType: string) {
    try {
      switch (videoType) {
        case 'f':
          return 'movies';
        case 'details':
          return '';
        default:
          return videoType;
      }
    } catch (error) {}
  }
}
