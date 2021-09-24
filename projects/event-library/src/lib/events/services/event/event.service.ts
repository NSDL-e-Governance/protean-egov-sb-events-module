import { Injectable } from '@angular/core';
import { DataService } from '../data-request/data-request.service';
import { UserConfigService } from '../userConfig/user-config.service';
import { TimezoneCal } from '../../services/timezone/timezone.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  isEnroll: boolean = false;
  items: any;
  today = new Date();
  todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
  todayTime = this.today.getHours() + ":" + this.today.getMinutes();
  todayDateTime = this.timezoneCal.calcTime(this.todayDate, this.todayTime);  

  constructor(
    private userConfigService: UserConfigService,
    private timezoneCal: TimezoneCal,
    private dataService: DataService) {
  }

  /**
   * To user enrolled event list
   */
  getEnrollEvents(eventId, userId) {

    const requestBody = {
      request: {
        "courseId": eventId,
        "userId": userId,
        "fixedBatchId": "event_batch_id"
      }
    };

    const req = {
      url: this.userConfigService.getConfigUrl().enrollListApi,
      data: requestBody
    };

    return this.dataService.get(req);
  }

  /**
   * For Enroll/Unenroll to the event
   */
  enrollToEventPost(action, cId, uId) {
    const requestBody = {
      request: {
        "courseId": cId,
        "userId": uId,
        "fixedBatchId": "event_batch_id"
      }
    };

    const req = {
      url: this.userConfigService.getConfigUrl().enrollApi,
      data: requestBody

    };

    return this.dataService.post(req).subscribe((data) => {
      console.log("Result = ", data);
    });
  }

  /**
   * Get the Big Blue Button URL
   */
  getBBBURl(EventId,uId){
    const req = {
      url: this.userConfigService.getConfigUrl().BBBGetUrl + '/' + EventId
    };

    return this.dataService.get(req);
  }


  convertDate(eventDate) {
    var date = new Date(eventDate),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    
    var datestr = [date.getFullYear(), mnth, day].join("/");

    return datestr;
  }

  /** Get event Status and show on list view  
   * 1. Past
   * 2. Ongoing
   * 3. Upcoming
   * */  
  async getEventStatus(event) {
    // Event Start date time 
    var startEventTime = await this.timezoneCal.calcTime(event.startDate, event.startTime);
    var startDifference = startEventTime.getTime() - this.todayDateTime.getTime();
    var startInMinutes = Math.round(startDifference / 60000);

    // Event end date time
    var endEventTime = this.timezoneCal.calcTime(event.endDate, event.endTime);
    var endDifference = this.todayDateTime.getTime() - endEventTime.getTime();
    var endInMinutes = Math.round(endDifference / 60000);

    if (startInMinutes >= 10 && endInMinutes < 0)
    {
      event.eventStatus = 'Upcoming';
      event.showDate = 'Satrting On: ' + event.startDate;
    }
    else if (startInMinutes <= 10 && endInMinutes < 0)
    {
      event.eventStatus = 'Ongoing';
      event.showDate = 'Ending On: ' + event.endDate;
    }
    else if (startInMinutes <= 10 && endInMinutes > 0)
    {
      event.eventStatus = 'Past';
      event.showDate = 'Ended On: ' + event.endDate;
    }

    return event;
  }
  
}


