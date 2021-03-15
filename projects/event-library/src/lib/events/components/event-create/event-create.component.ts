import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { EventCreateService } from '../../services/event-create/event-create.service';
import { Router } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'sb-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventCreateComponent implements OnInit {
  @Input() formFieldProperties: any;

  formValues: any;
  startDate: any;
  endDate: any;
  startTime: any;
  endTime: any;
  registrationStartDate: any;
  registrationEndDate: any;
  timeDiff: any;
  today = new Date();
  todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);

  constructor(private eventCreateService: EventCreateService,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
  }

  valueChanges(eventData) {
    if (eventData) {
      this.formValues = eventData;
    }
  }

  postData() {


    if (this.formValues == undefined) {
      alert('Please Enter Event Name');
    } else if (this.formValues.name == undefined || this.formValues.name.trim() == "") {
      alert('Please Enter Event Name');
    } else if (this.startDate == undefined || this.startTime == undefined || !this.timeValidation(this.startDate, this.startTime)) {
      alert('Please Enter Valid Event Start Date and Time');

    } else if (this.endDate == undefined || this.endTime == undefined || !this.timeValidation(this.endDate, this.endTime)) {
      alert('Please Enter Valid Event End Date and Time');
    } else if (this.registrationStartDate == undefined) {
      alert('Please Enter Valid Event Registration Start Date');
    } else if (this.registrationEndDate == undefined) {
      alert('Please Enter Valid Registration End Date');
    } else if (!this.dateValidation(this.startDate + " " + this.startTime, this.endDate + " " + this.endTime)) {
      alert('Event end date should be greater than start date');
    } else if (!this.dateValidation(this.registrationStartDate, this.registrationEndDate)) {
      alert('Registration end date should be greater than start date');
    } else {

      this.formValues["startDate"] = this.startDate;
      this.formValues["startTime"] = this.startTime;
      this.formValues["endDate"] = this.endDate;
      this.formValues["endTime"] = this.endTime;
      this.formValues["registrationStartDate"] = this.registrationStartDate;
      this.formValues["registrationEndDate"] = this.registrationEndDate;

      this.eventCreateService.createEvent(this.formValues);
    }

  }

  Cancel() {
    this.location.back()
  }

  timeValidation(date, time) {
    var startEventTime = new Date(date + " " + time);
    var startDifference = startEventTime.getTime() - this.today.getTime();
    var timeDiff = Math.round(startDifference / 60000);

    return (timeDiff > 0) ? true : false;
  }

  dateValidation(sdate, edate) {
    var startEventDate = new Date(sdate);
    var endEventDate = new Date(edate);

    var startDifference = endEventDate.getTime() - startEventDate.getTime();
    var timeDiff = Math.round(startDifference / 60000);

    return (timeDiff > 0) ? true : false;
  }


}
 
