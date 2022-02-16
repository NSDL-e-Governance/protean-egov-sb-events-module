import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe, Location } from '@angular/common'
import { CsvDownloadService } from '../../services/download/csv-download.service';
import { EventService } from '../../services/event/event.service';
import { Router } from '@angular/router';
import { TimezoneCal } from '../../services/timezone/timezone.service';
// import {attendanceList} from './attendance';
@Component({
  selector: 'sb-enroll-event-users',
  templateUrl: './enroll-event-users.component.html',
  styleUrls: ['./enroll-event-users.component.css']
})
export class EnrollEventUsersComponent implements OnInit {

  // @Input() enrollEventDetails: any = attendanceList;
  @Input() enrollEventDetails: any ;
  @Input() paginateLimit: number = 5;
  @Input() redirection: any = 'event';
  @Input() eventDetailItem: any;
  @Input() showCard : boolean;
  @Output() detailedReport = new EventEmitter<any>();
  isMenu : any;
  p: any;
  showDownloadCodeBtn: boolean = true;
  arrayEnrollUsers: any = [];
  eventId: any;
  userId: any;
  modifiedEventDetailItem: any;
  arrayEnrollUsersData: any = [];
  constructor(
    public datepipe: DatePipe,
    // public translate: TranslateService,
    private timezoneCal: TimezoneCal,
    private router: Router,
    private csvDownloadService: CsvDownloadService,
    private eventService: EventService, 
    private location: Location) { }

  ngOnInit(): void {
    // this.enrollEventDetails = attendanceList 
    if(this.eventDetailItem){
    this.eventService.getEventStatus(this.eventDetailItem);
    this.eventId = this.eventDetailItem.identifier;
    }

    if(this.enrollEventDetails)
    {
      var timezoneshort = this.timezoneCal.timeZoneAbbreviated();
      this.arrayEnrollUsersData = [];    
      this.enrollEventDetails.forEach(item => {
        var newArray: any = [];
        newArray.fullName = item.fullName?item.fullName:'-';
        newArray.email = item.email?item.email:'-';
        newArray.joinedDateTime = item.joinedDateTime? this.datepipe.transform(item.joinedDateTime, 'longDate') + ', ' + this.datepipe.transform(item.joinedDateTime, 'HH:mm') + '(' + timezoneshort + ')':'-';
        newArray.leftDateTime = item.joinedDateTime? this.datepipe.transform(item.joinedDateTime, 'longDate') + ', ' + this.datepipe.transform(item.joinedDateTime, 'HH:mm') + '(' + timezoneshort + ')':'-';;
        newArray.duration = item.duration?item.duration:'-';
        // if(item.duration)
        // {console.log("item-duration",item.duration);
        //   const sec = parseInt(item.duration, 10);
        //   let hours   = Math.floor(sec / 3600);
        //   let minutes = Math.floor((sec - (hours * 3600)) / 60);
        //   let seconds = sec - (hours * 3600) - (minutes * 60)
        //   newArray.duration = hours+'HH'+':'+minutes + 'MM' +':'+seconds+'SS';
        // }
        newArray.enrolledDate = this.eventService.convertDate(item.enrolledDate);

        if (item.status == 2)
        {
          newArray.status = 'Present';
        }
        else
        {
          newArray.status = 'Absent';
        }
        console.log("New array---",newArray);
        this.arrayEnrollUsersData.push(newArray);
      });
    }    
  }

  getEnrollDataCsv(){
  var timezoneshort = this.timezoneCal.timeZoneAbbreviated();
  this.arrayEnrollUsers = [];  
   
  this.enrollEventDetails.forEach(item => {
    var newArray: any = [];
    newArray.UserId = item.userId;
    newArray.UserName = item.fullName;
    newArray.Email = item.email;
    // newArray.JoinTime = item.firstJoined;
    // newArray.LeaveTime = item.lastLeft;
    newArray.JoinTime = this.eventService.convertDate(item.joinedDateTime);
    newArray.LeaveTime = this.eventService.convertDate(item.leftDateTime);
    newArray.Duration = item.duration;
    newArray.EnrollmentDate = this.eventService.convertDate(item.enrolledDate);

    if (item.status == 2)
    {
      newArray.AttendanceStatus = 'Present';
    }
    else
    {
      newArray.AttendanceStatus = 'Absent';
    }

    this.arrayEnrollUsers.push(newArray);
    
  });

    this.csvDownloadService.downloadFile(this.arrayEnrollUsers, 'event-report');
  }

  goBack(): void {
    this.location.back();
  }

  navToUserAttendanceDetail(event) {
    this.detailedReport.emit (event);
  }
}