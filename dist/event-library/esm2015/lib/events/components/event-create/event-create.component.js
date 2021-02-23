/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-create/event-create.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service';
export class EventCreateComponent {
    /**
     * @param {?} eventsService
     */
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.eventsService.getEventFormConfig().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.formFieldProperties = data.result['form'].data.fields;
            console.log(data.result['form']);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('err = ', err);
        }));
    }
    /**
     * @return {?}
     */
    postData() {
        console.log('eventData postData------>', this.formValues);
    }
    /**
     * @param {?} eventData
     * @return {?}
     */
    valueChanges(eventData) {
        if (eventData) {
            console.log('eventData valueChanges------>', eventData);
            this.formValues = eventData;
        }
    }
}
EventCreateComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-event-create',
                template: "\n<ng-container *ngIf=\"formFieldProperties\">\n  <sb-dynamic-form class=\"label-1\" [config]=\"formFieldProperties\" (valueChanges)=\"valueChanges($event)\"></sb-dynamic-form>\n</ng-container>\n\n<div class=\"div-margin\">\n  <div>Start Date & Time : </div>\n  <input class=\"date-field\" type=\"datetime-local\" id=\"meeting-time\" name=\"meeting-time\"  min=\"2020-06-07T00:00\">\n</div>\n\n<div class=\"div-margin\">\n  <div>End Date & Time : </div>\n  <input class=\"date-field\" type=\"datetime-local\" id=\"meeting-time\" name=\"meeting-time\"  min=\"2020-06-07T00:00\">\n</div>\n\n<div class=\"div-flex\">\n  <button class=\"sb-submit-button sb-submit-button-color\" (click)=\"postData();\">Submit</button>\n</div>\n\n",
                styles: [".div-flex{display:flex}.date-field{width:99%;padding:5px 2px}.div-margin{margin:20px 0}.sb-submit-button{border:none;color:#fff;padding:12px 99px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:15px 0;cursor:pointer;width:100%}.sb-submit-button-color{background-color:#236bca}"]
            }] }
];
/** @nocollapse */
EventCreateComponent.ctorParameters = () => [
    { type: EventsService }
];
if (false) {
    /** @type {?} */
    EventCreateComponent.prototype.formFieldProperties;
    /** @type {?} */
    EventCreateComponent.prototype.formValues;
    /**
     * @type {?}
     * @private
     */
    EventCreateComponent.prototype.eventsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50LWNyZWF0ZS9ldmVudC1jcmVhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPOUQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUkvQixZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFJLENBQUM7Ozs7SUFFckQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUM5RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7Ozs7UUFDRCxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFNBQVM7UUFDcEIsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7O1lBOUJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixrdUJBQTRDOzthQUU3Qzs7OztZQU5RLGFBQWE7Ozs7SUFRckIsbURBQXlCOztJQUMxQiwwQ0FBaUI7Ozs7O0lBRUgsNkNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NiLWV2ZW50LWNyZWF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ldmVudC1jcmVhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ldmVudC1jcmVhdGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50Q3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiBmb3JtRmllbGRQcm9wZXJ0aWVzOiBhbnk7XG5mb3JtVmFsdWVzIDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRzU2VydmljZTogRXZlbnRzU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ldmVudHNTZXJ2aWNlLmdldEV2ZW50Rm9ybUNvbmZpZygpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICB0aGlzLmZvcm1GaWVsZFByb3BlcnRpZXMgPSBkYXRhLnJlc3VsdFsnZm9ybSddLmRhdGEuZmllbGRzO1xuICAgICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHRbJ2Zvcm0nXSk7XG4gICAgfSxcbiAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnIgPSAnLCBlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgcG9zdERhdGEoKSB7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50RGF0YSBwb3N0RGF0YS0tLS0tLT4nLCB0aGlzLmZvcm1WYWx1ZXMpO1xufVxuXG52YWx1ZUNoYW5nZXMoZXZlbnREYXRhKSB7XG4gIGlmIChldmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnZXZlbnREYXRhIHZhbHVlQ2hhbmdlcy0tLS0tLT4nLCBldmVudERhdGEpO1xuICAgIHRoaXMuZm9ybVZhbHVlcyA9IGV2ZW50RGF0YTtcbiAgfVxufVxuXG59XG4gIl19