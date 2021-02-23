import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Input, IterableDiffers } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() item: any;
  identifier: number;
  constructor(private _router: Router) {}

  ngOnInit() {
  }
}





