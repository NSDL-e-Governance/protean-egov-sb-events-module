import { OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';
export declare class EventDetailComponent implements OnInit {
    private eventsService;
    private _router;
    configData: any;
    identifier: number;
    item: any;
    constructor(eventsService: EventsService, _router: Router);
    ngOnInit(): void;
    joinEvent(): void;
}
