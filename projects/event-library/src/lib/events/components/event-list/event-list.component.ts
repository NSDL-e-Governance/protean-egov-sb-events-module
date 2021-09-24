import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import{ labelMessages } from './../labels';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'sb-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})

export class EventListComponent implements OnInit {

  @Input() list: any;
  @Input() paginateLimit: number = 5;
  @Input() toSort;
  @Output() eventDetailData = new EventEmitter();
  @Output() redirectToDetail = new EventEmitter();
  @Input() myEvents: any;
  @Input() redirection: any = 'event';
  labelMessages = labelMessages;
  
  constructor(
    private router: Router,
    public translate: TranslateService,
    private eventService: EventService
  ) {
    //translate.setDefaultLang('en');
  }

  ngOnInit() {
    // Get all events
    if (this.list)
    {
      this.getEventStatus(this.list);
    }

    // Get my events
    if (this.myEvents)
    {
      this.getEventStatus(this.myEvents);
    }
  }

  /** Get event Status and show on list view  
   * 1. Past
   * 2. Ongoing
   * 3. Upcoming
   * */  
  getEventStatus(eventList) {
     eventList.forEach(async event => {
       this.eventService.getEventStatus(event);
     });
  }

  /*onEventWrapper(identifier) {   
    this.router.navigate([this.redirection], {
      queryParams: {
        identifier: identifier,
        view: 'detail'
      }
    });
  }*/

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 3};

  navToEventDetail(res){
      this.eventDetailData.emit(res);
    }
}
