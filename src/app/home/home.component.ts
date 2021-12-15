import { EventDetailService } from './../../../projects/event-library/src/lib/events/services/event-detail/event-detail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibEventService } from './../../../projects/event-library/src/lib/events/services/lib-event/lib-event.service';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  eventItem: any;
  eventList: any;
  // userId: any = "999";
  userId: any;
  eventConfig: any;
  queryParams : any;
  eventDetailItem: any;
  constructor(private eventDetailService: EventDetailService ,
    private activatedRoute : ActivatedRoute,
    private libEventService: LibEventService 
   ) { }


  showEventDetailPage(identifier) {
    this.eventDetailService.getEvent(identifier).subscribe((data: any) => {
      this.eventItem = data.result.event;
    },
      (err: any) => {
        console.log('err = ', err);
      });
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params) => {
      this.queryParams = params;
    this.showEventDetailPage(params.identifier);
    this.eventConfig = _.get(this.libEventService.eventConfig, 'context.user');
    this.userId=this.eventConfig.id;
   
  });
}
}
