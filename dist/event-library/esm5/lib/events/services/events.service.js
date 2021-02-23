/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/events.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var EventsService = /** @class */ (function () {
    function EventsService(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    EventsService.prototype.getEvent = /**
     * @return {?}
     */
    function () {
        // let _apiUrl = "https://jticketingdemo.techjoomla.com/index.php?option=com_api&app=users&resource=config&format=raw";// + identifier;
        //   return this.http.get<any>(_apiUrl);
        return this.http.get('assets/api.json');
    };
    /**
     * @return {?}
     */
    EventsService.prototype.getEventFormConfig = /**
     * @return {?}
     */
    function () {
        return this.http.get('assets/api-event-post.json');
    };
    EventsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EventsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ EventsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EventsService_Factory() { return new EventsService(i0.ɵɵinject(i1.HttpClient)); }, token: EventsService, providedIn: "root" });
    return EventsService;
}());
export { EventsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvc2VydmljZXMvZXZlbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7OztBQUVoRTtJQUlFLHVCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQzs7OztJQUV6QyxnQ0FBUTs7O0lBQVI7UUFDRSx1SUFBdUk7UUFDdkksd0NBQXdDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0saUJBQWlCLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsMENBQWtCOzs7SUFBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLDRCQUE0QixDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxVQUFVOzs7d0JBRG5CO0NBa0JDLEFBZkQsSUFlQztTQVpZLGFBQWE7Ozs7OztJQUNaLDZCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0RXZlbnQoKSB7XG4gICAgLy8gbGV0IF9hcGlVcmwgPSBcImh0dHBzOi8vanRpY2tldGluZ2RlbW8udGVjaGpvb21sYS5jb20vaW5kZXgucGhwP29wdGlvbj1jb21fYXBpJmFwcD11c2VycyZyZXNvdXJjZT1jb25maWcmZm9ybWF0PXJhd1wiOy8vICsgaWRlbnRpZmllcjtcbiAgICAvLyAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4oX2FwaVVybCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PignYXNzZXRzL2FwaS5qc29uJyk7XG4gIH1cblxuICBnZXRFdmVudEZvcm1Db25maWcoKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KCdhc3NldHMvYXBpLWV2ZW50LXBvc3QuanNvbicpO1xuICB9XG59XG4iXX0=