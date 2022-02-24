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
  // enrollToEventPost(action, cId, uId) {
  //   const requestBody = {
  //     request: {
  //       "courseId": cId,
  //       "userId": uId,
  //       "fixedBatchId": "event_batch_id"
  //     }
  //   };

  //   const req = {
  //     url: this.userConfigService.getConfigUrl().enrollApi,
  //     data: requestBody

  //   };

  //   return this.dataService.post(req).subscribe((data) => {
  //     console.log("Result = ", data);
  //   });
  // }

  enrollToEventPost(action, cId, uId, batchDetails) {
    const requestBody = {
      request: {
        "courseId": cId,
        "userId": uId,
        "batchId": batchDetails.batchId
      }
    };

    if (action == 'enroll')
    {
      const req = {
        url: this.userConfigService.getConfigUrl().enrollApi,
        data: requestBody
      };

      return this.dataService.post(req);
    }
    else if (action == 'unenroll')
    {
      const req = {
        url: this.userConfigService.getConfigUrl().unenrollApi,
        data: requestBody
      };

      return this.dataService.post(req);
    }
  }

   getBatches(filterval)
   {
      const requestBody = {
      "request": {
          "filters":filterval,
          "sort_by": {
              "createdDate": "desc"
          }
        }
      }

      const BearerKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI1S0xKdzBHRUd0M2VEMmlKNjJ1M05tRG1QY3Z6b0trWSJ9.6Av5aPfb_m22sCbbXdUKW3dQc8cRAt3tiIcCyGHjCzg";

    const option = {
      url: this.userConfigService.getConfigUrl().batchlist,
      data: requestBody,
      header: { 'Content-Type' : 'application/json', 'Authorization' : BearerKey}
    };

    return this.dataService.post(option);
   }

  /**
   * User meeting Attendance list
   */
 getAttendanceList(contentId,batchId)
 {
   const requestBody = {
     request: {
           "contentId": contentId,
           "batchId": batchId
     }
   };


   const option = {
     url: this.userConfigService.getConfigUrl().attendanceApi,
     data: requestBody,
     header: {
         'Content-Type' : 'application/json',
          // 'X-Authenticated-User-Token' : AuthUserToken
       }
   };

  return this.dataService.post(option);
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
/**
  * Get a BBB Moderator meeting link
  * @param EventId
  * @returns BBB Moderator meeting link
  */
 getBBBURlModerator(EventId,fullName,userId, muteUser, logoutUrl)
 {
   const requestBody = {
     request: {
      "event": {
           "userName" : "G1"
       }
     }
   };
    const req = {
       url: this.userConfigService.getConfigUrl().BBBGetUrlModerator + '/' + EventId + '?userName=' + fullName+"&userId=" + userId+"&muteOnStart=" + muteUser+'&logoutURL=' + logoutUrl,
     };
     console.log(req);
     return this.dataService.get(req);
 }

/**
 * Get BBB Attendee meeting link
 * @param EventId
 * @returns BBB Attendee meeting link
 */
 getBBBURlAttendee(EventId,fullName,userId,logoutUrl)
 {
          // curl --location --request GET 'https://staging-sunbird.nsdl.co.in/api/event/v4/join/moderator/do_21342283278607155213?userName=Gaurav Londhe&userId=882a43f3-9d17-49d7-b06b-a08219a09803&muteOnStart=true'
     const req = {
       url: this.userConfigService.getConfigUrl().BBBGetUrlAttendee + '/' + EventId + '?userName=' + fullName+"&userId=" + userId+'&logoutURL=' + logoutUrl,
     };

     return this.dataService.get(req);
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


