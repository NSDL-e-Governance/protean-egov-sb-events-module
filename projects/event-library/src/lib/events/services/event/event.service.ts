import { Injectable } from '@angular/core';
import { DataService } from '../data-request/data-request.service';
import { UserConfigService } from '../userConfig/user-config.service';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  isEnroll: boolean = false;
  items: any;
  constructor(
    private userConfigService: UserConfigService,
    private dataService: DataService) {
  }

  /**
   * To user enrolled event list
   */
  getEnrollEvents(courseId, userId) {

    const req = {
      url: this.userConfigService.getConfigUrl().enrollListApi
    };

    return this.dataService.get(req);
  }

  /**
   * For Enroll/Unenroll to the event
   */
  enrollToEventPost(cId, uId) {
    const requestBody = {
      request: {
        "courseId": cId,
        "userId": uId,
        "fixedBatchId": "event_batch_id"
      }
    };
    const option = {
      url: this.userConfigService.getConfigUrl().enroll,
     data: requestBody,
     header: { 'Access-Control-Allow-Origin' : '*'}
   };
     this.dataService.post(option);
  }

  unEnrollToEventPost( cId, uId){
    const requestBody = {
      request: {
        "courseId": cId,
        "userId": uId,
        "fixedBatchId": "event_batch_id"
      }
    };
    const option = {
      url: this.userConfigService.getConfigUrl().unEnroll,
     data: requestBody,
     header: { 'Access-Control-Allow-Origin' : '*'}
   };
     this.dataService.post(option);
  }

}


