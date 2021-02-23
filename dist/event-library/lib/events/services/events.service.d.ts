import { HttpClient } from '@angular/common/http';
export declare class EventsService {
    private http;
    constructor(http: HttpClient);
    getEvent(): import("rxjs").Observable<any>;
    getEventFormConfig(): import("rxjs").Observable<any>;
}
