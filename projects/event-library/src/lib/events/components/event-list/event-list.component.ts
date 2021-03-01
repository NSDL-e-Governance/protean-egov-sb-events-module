import { Component, OnInit, Input, Output } from '@angular/core';
import { EventListService } from './../../services/event-list/event-list.service';
@Component({
  selector: 'sb-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input() list: any;
  eventListHeaders: any;
  filteredEvents: any;
  searchText = '';
  filterOpenStatus = false;
  testVariable :any;
  eventFilters: any;
  public searchFormConfig: any;
  IEventData
  constructor(public eventListService: EventListService) { 

  }

  ngOnInit() {
    
    this.assignCopy();
  }
  assignCopy(){
    this.filteredEvents = this.list;
  }


}
 
