import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-cover-event-detail',
  templateUrl: './cover-event-detail.component.html',
  styleUrls: ['./cover-event-detail.component.scss']
})
export class CoverEventDetailComponent implements OnInit {
  @Input() eventDetailItem: any;
  isEnrolled: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  isEnrollEvent(){
    this.isEnrolled = !this.isEnrolled;
  }

}
