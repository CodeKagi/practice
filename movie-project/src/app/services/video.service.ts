import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  apiUrl = environment.baseAPIUrl;
  videos : Video[];
  constructor( private httpClient: HttpClient) { }

  // getAllStremingVideos(): void {
  //   this.httpClient.get(this.apiUrl).subscribe(data => {
  //     console.log("data is", data);
  //   })
  // }
  getVideos(): Observable<Video[]> {
    debugger
    return this.httpClient.get<Video[]>(this.apiUrl).pipe(map(response => {
      return response}))
  }

  filterProgramTypes(): Observable<Video[]> {
    try {
      return this.httpClient.get<Video[]>(this.apiUrl).pipe(map(response => {
        if(response && response != null) {
          const programTypes = response.filter((obj, pos, arr)=> {
            return arr.map(videoObj => videoObj['programType']).indexOf(obj['programType']) === pos;
          })
          return programTypes
        }}))
    } catch (error) {
      error.message = `Video-Service::filterProgramTypes() - ${error.message}`;
      throw error
    }

  }
}
