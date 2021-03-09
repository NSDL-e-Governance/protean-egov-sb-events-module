import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IEventDetailInterface} from '../../interfaces/event-detail.interface';
import { EventLibraryService} from '../../../event-library.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {

  constructor(private http: HttpClient, private eventLibraryService: EventLibraryService) { }

  getEvent(apiUrl) {
    return this.http.get<IEventDetailInterface.IEventDetail>(apiUrl);
  }

  isUserEnroll(cId, uId){
    const requestBody = {
      request: {
        "courseId": cId,
        "userId": uId,
        "fixedBatchId": "event_batch_id"
      }
    };
  }

}


