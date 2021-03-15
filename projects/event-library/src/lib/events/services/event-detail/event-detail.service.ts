import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IEventDetailInterface} from '../../interfaces/event-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {

  constructor(private http: HttpClient) { }

  getEvent(apiUrl) {
    return this.http.get<IEventDetailInterface.IEventDetail>(apiUrl);
  }

}


