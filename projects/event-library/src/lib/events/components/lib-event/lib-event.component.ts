import { Component, OnInit, Input } from '@angular/core';
import { IEventConfig } from '../../interfaces/event-config';
import { LibEventService } from '../../services/lib-event/lib-event.service';
import * as _ from 'lodash-es';

@Component({
  selector: 'lib-event',
  templateUrl: './lib-event.component.html',
  styleUrls: ['./lib-event.component.css']
})
export class LibEventComponent implements OnInit {

  @Input() libEventConfig: IEventConfig | undefined;
  eventUserData: any;

  constructor(private libEventService: LibEventService) { }

  ngOnInit(): void {
    // console.log('Component libEventConfig :: ', this.libEventConfig);
    this.libEventService.initialize(this.libEventConfig);
    // this.eventUserData = _.get(this.libEventConfig, 'context.identifier');

    // console.log(' LIB EVENT this.eventUserData ::', this.eventUserData);
  }


}
