import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { VideoData } from '../models/video-data';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  apiUrl = environment.baseApiUrl;
  videoStreamList: Video[];
  constructor(private httpClient: HttpClient) {}

  getVideos(): Observable<VideoData>{
     const options = {
       headers: {
         'content-type': 'application/json'
       }
     }
     return  this.httpClient.get<VideoData>(this.apiUrl, options);
   }
}
