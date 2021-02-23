/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-create/event-create.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service';
var EventCreateComponent = /** @class */ (function () {
    function EventCreateComponent(eventsService) {
        this.eventsService = eventsService;
    }
    /**
     * @return {?}
     */
    EventCreateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.eventsService.getEventFormConfig().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.formFieldProperties = data.result['form'].data.fields;
            console.log(data.result['form']);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('err = ', err);
        }));
    };
    /**
     * @return {?}
     */
    EventCreateComponent.prototype.postData = /**
     * @return {?}
     */
    function () {
        console.log('eventData postData------>', this.formValues);
    };
    /**
     * @param {?} eventData
     * @return {?}
     */
    EventCreateComponent.prototype.valueChanges = /**
     * @param {?} eventData
     * @return {?}
     */
    function (eventData) {
        if (eventData) {
            console.log('eventData valueChanges------>', eventData);
            this.formValues = eventData;
        }
    };
    EventCreateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-event-create',
                    template: "\n<ng-container *ngIf=\"formFieldProperties\">\n  <sb-dynamic-form class=\"label-1\" [config]=\"formFieldProperties\" (valueChanges)=\"valueChanges($event)\"></sb-dynamic-form>\n</ng-container>\n\n<div class=\"div-margin\">\n  <div>Start Date & Time : </div>\n  <input class=\"date-field\" type=\"datetime-local\" id=\"meeting-time\" name=\"meeting-time\"  min=\"2020-06-07T00:00\">\n</div>\n\n<div class=\"div-margin\">\n  <div>End Date & Time : </div>\n  <input class=\"date-field\" type=\"datetime-local\" id=\"meeting-time\" name=\"meeting-time\"  min=\"2020-06-07T00:00\">\n</div>\n\n<div class=\"div-flex\">\n  <button class=\"sb-submit-button sb-submit-button-color\" (click)=\"postData();\">Submit</button>\n</div>\n\n",
                    styles: [".div-flex{display:flex}.date-field{width:99%;padding:5px 2px}.div-margin{margin:20px 0}.sb-submit-button{border:none;color:#fff;padding:12px 99px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:15px 0;cursor:pointer;width:100%}.sb-submit-button-color{background-color:#236bca}"]
                }] }
    ];
    /** @nocollapse */
    EventCreateComponent.ctorParameters = function () { return [
        { type: EventsService }
    ]; };
    return EventCreateComponent;
}());
export { EventCreateComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50LWNyZWF0ZS9ldmVudC1jcmVhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFOUQ7SUFTRSw4QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDOzs7O0lBRXJELHVDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVM7WUFDMUQsS0FBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7O1FBQ0QsVUFBQyxHQUFRO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCwyQ0FBWTs7OztJQUFaLFVBQWEsU0FBUztRQUNwQixJQUFJLFNBQVMsRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDN0I7SUFDSCxDQUFDOztnQkE5QkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGt1QkFBNEM7O2lCQUU3Qzs7OztnQkFOUSxhQUFhOztJQWtDdEIsMkJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTNCWSxvQkFBb0I7OztJQUNoQyxtREFBeUI7O0lBQzFCLDBDQUFpQjs7Ozs7SUFFSCw2Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ItZXZlbnQtY3JlYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V2ZW50LWNyZWF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V2ZW50LWNyZWF0ZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuIGZvcm1GaWVsZFByb3BlcnRpZXM6IGFueTtcbmZvcm1WYWx1ZXMgOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudHNTZXJ2aWNlOiBFdmVudHNTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmV2ZW50c1NlcnZpY2UuZ2V0RXZlbnRGb3JtQ29uZmlnKCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkUHJvcGVydGllcyA9IGRhdGEucmVzdWx0Wydmb3JtJ10uZGF0YS5maWVsZHM7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdFsnZm9ybSddKTtcbiAgICB9LFxuICAgIChlcnI6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2VyciA9ICcsIGVycik7XG4gICAgfSk7XG4gIH1cblxuICBwb3N0RGF0YSgpIHtcbiAgICBjb25zb2xlLmxvZygnZXZlbnREYXRhIHBvc3REYXRhLS0tLS0tPicsIHRoaXMuZm9ybVZhbHVlcyk7XG59XG5cbnZhbHVlQ2hhbmdlcyhldmVudERhdGEpIHtcbiAgaWYgKGV2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdldmVudERhdGEgdmFsdWVDaGFuZ2VzLS0tLS0tPicsIGV2ZW50RGF0YSk7XG4gICAgdGhpcy5mb3JtVmFsdWVzID0gZXZlbnREYXRhO1xuICB9XG59XG5cbn1cbiAiXX0=