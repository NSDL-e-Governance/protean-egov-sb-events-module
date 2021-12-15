import { Component, Input, OnInit } from '@angular/core';
import { DatePipe, Location } from '@angular/common'
import { CsvDownloadService } from '../../services/download/csv-download.service';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'sb-enroll-event-users',
  templateUrl: './enroll-event-users.component.html',
  styleUrls: ['./enroll-event-users.component.css']
})
export class EnrollEventUsersComponent implements OnInit {

  @Input() enrollEventDetails: any;
  @Input() paginateLimit: number = 5;
  @Input() redirection: any = 'event';
  @Input() eventDetailItem: any;
  p: any;
  showDownloadCodeBtn: boolean = true;
  arrayEnrollUsers: any = [];

  constructor(
    public datepipe: DatePipe, 
    // public translate: TranslateService,
    private csvDownloadService: CsvDownloadService,
    private eventService: EventService, 
    private location: Location) { }

  ngOnInit(): void {
  }

  getEnrollDataCsv(){
   
    this.enrollEventDetails.forEach(item => {
      var newArray: any = [];
      newArray.UserId = item.userId;
      newArray.UserName = item.fullName;
      newArray.Email = item.email;
      newArray.JoinTime = item.firstJoined;
      newArray.LeaveTime = item.lastLeft;
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
}
