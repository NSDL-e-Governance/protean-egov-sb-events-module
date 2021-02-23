import { OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
export declare class EventCreateComponent implements OnInit {
    private eventsService;
    formFieldProperties: any;
    formValues: any;
    constructor(eventsService: EventsService);
    ngOnInit(): void;
    postData(): void;
    valueChanges(eventData: any): void;
}
