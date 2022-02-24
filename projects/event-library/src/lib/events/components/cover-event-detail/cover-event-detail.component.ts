import { Component, OnInit, Input, Output , EventEmitter,ChangeDetectionStrategy,ViewChild,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import{ labelMessages } from './../labels';
import { EventService } from '../../services/event/event.service'
import { TimezoneCal } from '../../services/timezone/timezone.service';
import { DataService } from '../../services/data-request/data-request.service';
// import { TranslateService } from '@ngx-translate/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LibEventService } from '../../services/lib-event/lib-event.service';
import * as _ from 'lodash-es';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'sb-cover-event-detail',
  templateUrl: './cover-event-detail.component.html',
  styleUrls: ['./cover-event-detail.component.scss']
})

export class CoverEventDetailComponent implements OnInit {
  @Input() eventDetailItem: any;
  @Input() eventCreatorInfo: any;
  @Output() EditEventId = new EventEmitter<string>();
  @Output() retireEventId = new EventEmitter<string>();
  @Input() isDetalPage :any;
  @Output() navToDashbord = new EventEmitter();

  isOwner: boolean = true;
  userData: any;
  labelMessages = labelMessages;
  eStart: any;
  eEnd: any;
  isEnrolled: boolean = false;
  items: any;
  timezoneshort : string;
  eventConfig: any;
  batchId: any;
  isTruncate : boolean = false;
  openRecordingModal: boolean = false;
  RecordingUrls: any = [];
  key:boolean=false;
  today = new Date();
  todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
  todayTime = this.today.getHours() + ":" + this.today.getMinutes();
  todayDateTime = this.timezoneCal.calcTime(this.todayDate, this.todayTime);

  constructor(
    private router:Router,
    private eventService: EventService,
    private timezoneCal: TimezoneCal,
    private dataService: DataService,
    private libEventService: LibEventService,
    public datepipe: DatePipe
    // public translate: TranslateService
    ) {
  }

  ngOnInit()
  {
     this.eventConfig = _.get(this.libEventService.eventConfig, 'context.user');
     this.userData = this.eventConfig.id;

    if(this.eventDetailItem){
      this.isOwner = (this.eventDetailItem.owner == this.userData) ? true : false;
      this.timezoneshort = this.timezoneCal.timeZoneAbbreviated();
      this.setDateTimeOnCover();
      this.isEnrollEvent();
    }

    this.key=this.eventDetailItem.onlineProviderData.hasOwnProperty("recordings");   
  }

  /**
   * for show Date Time as per timezone
   */
  setDateTimeOnCover()
  {
    // Event Start date time
    var startEventTime = this.timezoneCal.calcTime(this.eventDetailItem.startDate, this.eventDetailItem.startTime);
    var startDifference = startEventTime.getTime() - this.todayDateTime.getTime();
    var startInMinutes = Math.round(startDifference / 60000);

    // Event end date time
    var endEventTime = this.timezoneCal.calcTime(this.eventDetailItem.endDate, this.eventDetailItem.endTime);
    var endDifference = this.todayDateTime.getTime() - endEventTime.getTime();
    var endInMinutes = Math.round(endDifference / 60000);

    var timezoneshort = this.timezoneCal.timeZoneAbbreviated();

    this.eStart = this.datepipe.transform(this.eventDetailItem.startDate, 'longDate') + ', ' + this.datepipe.transform(startEventTime, 'HH:mm') + ' (' + timezoneshort + ')';
    this.eEnd = this.datepipe.transform(this.eventDetailItem.endDate, 'longDate') + ', ' + this.datepipe.transform(endEventTime, 'HH:mm') + ' (' + timezoneshort + ')';
  }

  update_old(identifier, versionKey) {
    this.router.navigate(['/event-post'], {
      queryParams: {
        identifier: this.eventDetailItem.identifier,
        versionKey: this.eventDetailItem.versionKey
      }
    });
  }

  dashboard()
  {
    this.navToDashbord.emit(this.eventDetailItem.identifier );
  }

  update(event)
  {
    this.EditEventId.emit(event);
  }
  
  retireEvent(identifier: string)
  {
    this.retireEventId.emit(identifier);
  }

  truncateData(truncate)
  {
    this.isTruncate = truncate;
  }

  openRecordingDetailModal()
  {
    this.openRecordingModal = true;
    this.RecordingUrls = this.eventDetailItem.onlineProviderData.recordings;

    this.RecordingUrls.forEach(item => {
      if(item.duration)
      {
        const sec = parseInt(item.duration, 10);
        let hours   = Math.floor(sec / 3600);
        let minutes = Math.floor((sec - (hours * 3600)) / 60);
        let seconds = sec - (hours * 3600) - (minutes * 60)
        item.durations = hours+'HH'+':'+minutes + 'MM' +':'+seconds+'SS';
      }

      var startTime = item.startTime+' UTC ';
      let recordstartTime = new Date(startTime);

      var endTime = item.endTime+' UTC ';
      let recordendTime = new Date(endTime);

      var timezoneshort = this.timezoneCal.timeZoneAbbreviated();
      item.eventStartDateTime = item.startTime? this.datepipe.transform(recordstartTime, 'longDate') + ', ' + this.datepipe.transform(recordstartTime, 'HH:mm') + '(' + timezoneshort + ')':'-';
      item.eventEndDateTime = item.endTime? this.datepipe.transform(recordendTime, 'longDate') + ', ' + this.datepipe.transform(recordendTime, 'HH:mm') + '(' + timezoneshort + ')':'-';
    });
  }

  /**
  * For check user is enrolled or not
  * @param courseId Event id
  * @param userId Log-in user Id 
  */
  isEnrollEvent()
  {
    this.eventService.getEnrollEvents(this.eventDetailItem.identifier, this.userData).subscribe((data) => {
      this.items = data.result.courses;

      this.items.find((o, i) => {
        if (o.courseId === this.eventDetailItem.identifier) {
          this.isEnrolled = true;
        }    
      });
    });
  }
}
