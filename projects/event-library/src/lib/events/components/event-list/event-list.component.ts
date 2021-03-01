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

  onFilterChange(event: any) {
  
    switch (event.action) {
      case 'filterDataChange':
         
       // console.log(Object.entries(event.filteredEvents));
        Object.entries(event.filtersSelected).forEach(ele => {
           console.log(ele[1]);
          // console.log( this.filteredEvents);
          let key;
          let val;
          key = ele[0];
          if(ele[1] !=null)
          {val = ele[1][0];}
          
          this.filteredEvents.forEach(element => {
          if(val !=null)
          {if(element[key] == val){
            console.log(element);
            var val =  this.testVariable.push(element);
          }
        }
            
         });
         this.filteredEvents =  this.testVariable;
       });
        break;
      case 'filterStatusChange':
        break;
    }
  }
}
 
