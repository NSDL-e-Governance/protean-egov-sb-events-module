import { EventDetailService } from './../../../projects/event-library/src/lib/events/services/event-detail/event-detail.service';
import { Component, OnInit } from '@angular/core';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { EventLibraryModule } from '../../../projects/event-library/src/lib/event-library.module';
import {EventCreateService} from '../../../projects/event-library/src/lib/events/services/event-create/event-create.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  eventItem: any;
  formFieldProperties: any;
  constructor(private eventDetailService: EventDetailService, private eventCreateService: EventCreateService) { }

  ngOnInit() {
  this.showEventDetailPage();
   this.showEventCreatePage();

  }


  showEventDetailPage(){
    this.eventDetailService.getEvent("assets/api.json").subscribe((data: any) => {
      this.eventItem = data.data.result[0];
      console.log(this.eventItem);
    },
      (err: any) => {
        console.log('err = ', err);
      });
  }

  showEventCreatePage(){
    this.eventCreateService.getEventFormConfig('assets/api-event-post.json').subscribe((data:any)=>{
      this.formFieldProperties = data.result['form'].data.fields;
      console.log(data.result['form'].data.fields);
    })
  }




}
