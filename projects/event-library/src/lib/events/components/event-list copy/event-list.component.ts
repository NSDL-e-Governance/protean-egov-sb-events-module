import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
import { TimezoneCal } from '../../services/timezone/timezone.service';

@Component({
  selector: 'sb-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})

export class EventListComponent implements OnInit {

  @Input() list: any;
  @Input() paginateLimit: number = 5;
  @Input() myEvents: [];
  @Input() redirection: any = 'event';
  @Input() toSort;

  @Output() eventDetailData = new EventEmitter();
  @Output() redirectToDetail = new EventEmitter();

  today: any;
  todayDate: any;
  todayTime: any;
  isUserAbleToJoin: boolean = false;
  p: any;
  public showCarousalLists = true;
  public showMyEvents = false;
  public myEventsLists = false;
  public viewAllButton = true;

  constructor(
    private router: Router,
    // public translate: TranslateService,
    private timezoneCal: TimezoneCal
  ) {
    //translate.setDefaultLang('en');
  }

  // ngOnInit() {
  //   // Get all events
  //   if (this.list)
  //   {
  //     this.getEvents(this.list);
  //   }

  //   // Get my events
  //   if (this.myEvents)
  //   {
  //     this.getEvents(this.myEvents);
  //   }
  // }

  ngOnInit() { }
ngOnChanges() {

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
  getEventStatus(eventList) {
    eventList.forEach(async event => {
      this.eventService.getEventStatus(event);
    });
 }

  // getEvents(eventList) {
  //   this.today = new Date();
  //   this.todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
  //   this.todayTime = this.today.getHours() + ":" + this.today.getMinutes();

  //   var todayDateTime = this.timezoneCal.calcTime(this.todayDate, this.todayTime);
    
  //   eventList.forEach(async event => {
  //       // console.log("Event Id :",event.identifier);
  //       // console.log('startDate : ', event.startDate , " ", event.startTime);

  //       // Event Start date time 
  //       var startEventTime = await this.timezoneCal.calcTime(event.startDate, event.startTime);
  //       var startDifference = startEventTime.getTime() - todayDateTime.getTime();
  //       var startInMinutes = Math.round(startDifference / 60000);
    
  //       // Event end date time
  //       var endEventTime = this.timezoneCal.calcTime(event.endDate, event.endTime);
  //       var endDifference = todayDateTime.getTime() - endEventTime.getTime();
  //       var endInMinutes = Math.round(endDifference / 60000);

  //       if (startInMinutes >= 10 && endInMinutes < 0)
  //       {
  //         event.eventStatus = 'Upcoming';
  //         event.showDate = 'Satrting On: ' + event.startDate;
  //       }
  //       else if (startInMinutes <= 10 && endInMinutes < 0)
  //       {
  //         event.eventStatus = 'Ongoing';
  //         event.showDate = 'Ending On: ' + event.endDate;
  //       }
  //       else if (startInMinutes <= 10 && endInMinutes > 0)
  //       {
  //         event.eventStatus = 'Past';
  //         event.showDate = 'Ended On: ' + event.endDate;
  //       }
  //   });
  // }

  /*onEventWrapper(identifier) {   
    this.router.navigate([this.redirection], {
      queryParams: {
        identifier: identifier,
        view: 'detail'
      }
    });
  }*/

  slideConfig = { "slidesToShow": 3, "slidesToScroll": 3 };

  navToEventDetail(res) {
    this.eventDetailData.emit(res);
  }

  slickInit(event) { }

  openMyEventList() {
    this.showCarousalLists = false;
    this.showMyEvents      = true;
    this.myEventsLists     = true;
    this.viewAllButton     = false;
  }

  CloseList() {
    this.showCarousalLists = true;
    this.showMyEvents      = false;
    this.myEventsLists     = false;
    this.viewAllButton     = true;
  }
}
