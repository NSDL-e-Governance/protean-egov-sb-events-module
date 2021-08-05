import { EventDetailService } from './../../../projects/event-library/src/lib/events/services/event-detail/event-detail.service';
import { Component, OnInit } from '@angular/core';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { EventLibraryModule } from '../../../projects/event-library/src/lib/event-library.module';
import { EventCreateService } from '../../../projects/event-library/src/lib/events/services/event-create/event-create.service';
import { EventListService } from '../../../projects/event-library/src/lib/events/services/event-list/event-list.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  eventItem: any;
  formFieldProperties: any;
  eventList: any;
  userId: any = "123";
  ViewPage = 'list';
  searchFilterFormConfig: any;
  userData:any;
  filterConfig: any;
  listToDetail: any = '/redirect-detail';
  constructor(private eventDetailService: EventDetailService  , private eventCreateService: EventCreateService,  private eventListService: EventListService
   ) { }

  ngOnInit() {
    this.showEventDetailPage();
    this.showEventCreatePage();
    this.showEventListPage();
    this.showEventFiltrsPage();
  }

  Openview(view)
  {
    console.log(view);
    switch(view) {
      case 'list':
        this.ViewPage = 'list';
        break;
      case 'detail':
        this.ViewPage = 'detail';
      default:
        this.ViewPage = 'form';
    }
  }

  showEventDetailPage() {
    this.eventDetailService.getEvent().subscribe((data: any) => {
      this.eventItem = data.result.content;
      },
      (err: any) => {
        console.log('err = ', err);
      });
  }
  showEventCreatePage() {
    this.eventCreateService.getEventFormConfig().subscribe((data: any) => {
      this.formFieldProperties = data.result['form'].data.fields;
    })
  }
  showEventListPage(){
    this.eventListService.getEventList().subscribe((data:any)=>{
      this.eventList = data;
    })
  }
  showEventFiltrsPage(){
    this.eventListService.getEventFilters().subscribe((data: any) => {
      this.searchFilterFormConfig = data;
      this.filterConfig = [{
       name: 'searchForm',
       fields: data.properties
     }];
      },
     (err: any) => {
       console.log("err = ", err);
     }); 
  }

  retire(eventId: string) {
    this.eventDetailService.retireEvent(eventId).subscribe((data: any) => {
      this.eventItem = data
    },
      (err: any) => {
        console.log('err = ', err);
      });
  }
}
