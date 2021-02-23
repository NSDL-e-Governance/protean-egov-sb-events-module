import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {

  constructor(private http: HttpClient) { }

  
  getEvent(apiUrl) {
    return this.http.get<any>(apiUrl);
  }

}


