/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/events.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class EventsService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    getEvent() {
        // let _apiUrl = "https://jticketingdemo.techjoomla.com/index.php?option=com_api&app=users&resource=config&format=raw";// + identifier;
        //   return this.http.get<any>(_apiUrl);
        return this.http.get('assets/api.json');
    }
    /**
     * @return {?}
     */
    getEventFormConfig() {
        return this.http.get('assets/api-event-post.json');
    }
}
EventsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventsService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ EventsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EventsService_Factory() { return new EventsService(i0.ɵɵinject(i1.HttpClient)); }, token: EventsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvc2VydmljZXMvZXZlbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7OztBQUtoRSxNQUFNLE9BQU8sYUFBYTs7OztJQUN4QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQzs7OztJQUV6QyxRQUFRO1FBQ04sdUlBQXVJO1FBQ3ZJLHdDQUF3QztRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLGlCQUFpQixDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLDRCQUE0QixDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsVUFBVTs7Ozs7Ozs7SUFNTCw2QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50c1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldEV2ZW50KCkge1xuICAgIC8vIGxldCBfYXBpVXJsID0gXCJodHRwczovL2p0aWNrZXRpbmdkZW1vLnRlY2hqb29tbGEuY29tL2luZGV4LnBocD9vcHRpb249Y29tX2FwaSZhcHA9dXNlcnMmcmVzb3VyY2U9Y29uZmlnJmZvcm1hdD1yYXdcIjsvLyArIGlkZW50aWZpZXI7XG4gICAgLy8gICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KF9hcGlVcmwpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4oJ2Fzc2V0cy9hcGkuanNvbicpO1xuICB9XG5cbiAgZ2V0RXZlbnRGb3JtQ29uZmlnKCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PignYXNzZXRzL2FwaS1ldmVudC1wb3N0Lmpzb24nKTtcbiAgfVxufVxuIl19