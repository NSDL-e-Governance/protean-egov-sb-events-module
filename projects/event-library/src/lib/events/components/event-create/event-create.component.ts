import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  @Input() formFieldProperties: any;

  formValues: any;
  endDate: any;
  startDate: any;
  registerForm: any;
  playerName: string;

  constructor() { }

  ngOnInit() { }

  valueChanges(eventData) {
    if (eventData) {
      this.formValues = eventData;
    }
  }

}
