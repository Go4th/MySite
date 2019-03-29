import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WorkHistoryService {

  constructor(private http: HttpClient) { }

  GetWorkHistory(){
    return this.http.get("assets/WorkHIstoryMock.json");
  }
  GetAboutInfo(){
    return this.http.get("assets/AboutBilly.json");
  }
  GetInspirationInfo(){
    return this.http.get("assets/artwork.json");
  }
}
