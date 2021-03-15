import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'sb-join-event-button',
  templateUrl: './join-event-button.component.html',
  styleUrls: ['./join-event-button.component.scss']
})

export class JoinEventComponent implements OnInit {
  @Input() eventDetailItem: any;
  todayDateTime: any;
  isUserAbleToJoin: boolean = false;

  constructor() {
  }

  ngOnInit() {

    setInterval(() => {
      this.joinEvent();
    }, 1000);
  }

  joinEvent() {
    this.todayDateTime = new Date();

    var startEventTime = new Date(this.eventDetailItem.startDate + " " + this.eventDetailItem.startTime);
    var startDifference = startEventTime.getTime() - this.todayDateTime.getTime();
    var startInMinutes = Math.round(startDifference / 60000);

    var endEventTime = new Date(this.eventDetailItem.endDate + " " + this.eventDetailItem.endTime);
    var endDifference = this.todayDateTime.getTime() - endEventTime.getTime();
    var endInMinutes = Math.round(endDifference / 60000);

    this.isUserAbleToJoin = (startInMinutes <= 10 && endInMinutes < 0) ? true : false;

  }

  openProviderLink(joinLink) {
    window.open(joinLink, "_blank");
  }

}
