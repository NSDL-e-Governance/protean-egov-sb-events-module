import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventDetailService } from './../../../projects/event-library/src/lib/events/services/event-detail/event-detail.service';
import { Location } from '@angular/common';
import { LibEventService } from './../../../projects/event-library/src/lib/events/services/lib-event/lib-event.service';
import * as _ from 'lodash-es';
import { EventService } from './../../../projects/event-library/src/lib/events/services/event/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})

export class EventDetailComponent implements OnInit {
  eventItem: any;
  // userId: any = "999";
  userId: any;
  eventConfig: any;
  isLoading: boolean =  true;
  queryParams:any;
  attendeeList: any;

  constructor(
    private eventService: EventService, 
    private route: ActivatedRoute,
    private eventDetailService: EventDetailService,
    private location: Location,
    private libEventService: LibEventService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.getEventDetail();
    this.eventConfig = _.get(this.libEventService.eventConfig, 'context.user');
    this.userId=this.eventConfig.id;
    this.getAttendeeList();
  }

  /**
   * Get Single event detail
   */
  getEventDetail(): void {
    // Get the url (query) params
    this.route.queryParams.subscribe((params) => {
      this.queryParams = params;
    });

    // Subsribe to the event detail service and get single event data
    this.eventDetailService.getEvent(this.queryParams.identifier)
        .subscribe((data: any) => {
          this.eventItem = data.result.event;
          this.isLoading = false;
        },(err: any) => {
          console.log('err = ', err);
        });
  }

  goBack(): void {
    this.location.back();
  }
  navToEventDetail($event)
  {
    this.router.navigate(['/play/event-detail'], {
      queryParams: {
        identifier: $event.identifier
      }
    });

    setTimeout(function(){window.location.reload();
    }, 2000);
  }
  getAttendeeList(){
    this.eventService.getAttendanceList(this.queryParams.identifier,this.queryParams.batchid).subscribe((data) => {
      this.attendeeList = data.result.response.content;
      this.getEnrollEventUsersData(this.attendeeList);
      console.log("this.attendeeList-------",this.attendeeList);
    });
  }


  getEnrollEventUsersData(list){
    // this.attendanceList.forEach(item => {
    //   this.eventService.convertDate(item.enrolledDate);
    // });

    // this.eventUserEnrollData = this.attendanceList;
  }
}
