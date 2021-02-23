import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventCreateService {

  constructor(private http: HttpClient) { }

  getEventFormConfig(apiUrl) {
    return this.http.get<any>(apiUrl);
  }
}
