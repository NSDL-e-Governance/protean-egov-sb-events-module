import { Component, Input, OnInit } from '@angular/core';
import { DatePipe, Location } from '@angular/common'
import { TranslateService } from '@ngx-translate/core';
import{ labelMessages } from './../labels';

@Component({
  selector: 'sb-enroll-event-users',
  templateUrl: './enroll-event-users.component.html',
  styleUrls: ['./enroll-event-users.component.css']
})
export class EnrollEventUsersComponent implements OnInit {

  @Input() enrollEventDetails: any;
  @Input() paginateLimit: number = 20;
  @Input() redirection: any = 'event';
  labelMessages= labelMessages;

  showDownloadCodeBtn: boolean = true;

  constructor(
    public datepipe: DatePipe, 
    public translate: TranslateService,
    private location: Location) { }

  ngOnInit(): void { }

  getEnrollDataCsv(){
    console.log('Click here to download enrollment data!..');
  }

  goBack(): void {
    this.location.back();
  }

}
