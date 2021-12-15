import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'sb-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  @Input() list: any;
  @Input() paginateLimit: number = 5;
  @Output() eventDetailData = new EventEmitter();
  @Output() redirectToDetail = new EventEmitter();
  @Input() myEvents: any;
  @Input() redirection: any = 'event';
  @Input() toSort;
  public showCarousalLists = true;
  public showMyEvents = false;
  public myEventsLists = false;
  public viewAllButton = true;

  constructor(
    private router: Router,
    // public translate: TranslateService
  ) {
    //translate.setDefaultLang('en');
  }

  ngOnInit() {
    // console.log("-----", this.myEvents);
  }

  /*onEventWrapper(identifier) {   
    this.router.navigate([this.redirection], {
      queryParams: {
        identifier: identifier,
        view: 'detail'
      }
    });
  }*/

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  navToEventDetail(res){
      this.eventDetailData.emit(res);
    }
  slickInit(event){

  }


  openMyEventList() {
    // console.log("IN HERE");
    this.showCarousalLists = false;
    this.showMyEvents = true;
    this.myEventsLists = true;
    this.viewAllButton = false;
  }

  CloseList() {
    this.showCarousalLists = true;
    this.showMyEvents = false;
    this.myEventsLists = false;
    this.viewAllButton = true;
  }
}
