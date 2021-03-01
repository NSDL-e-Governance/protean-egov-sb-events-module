import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventListService {

  constructor(private http: HttpClient) { }

  getEventList(apiUrl) {
    // return this.http.get<any>('assets/eventlist.json');
    return this.http.get<any>(apiUrl);
  }
  // getEventFilters(apiUrl) {
  //   return this.http.get<any>(apiUrl);
  //   // return this.http.get<any>('assets/eventFilter.json'); 
  // }
  getEventFilters() {
    // return this.http.get<any>(apiUrl);
    return this.http.get<any>('assets/eventFilter.json'); 
  }

}
