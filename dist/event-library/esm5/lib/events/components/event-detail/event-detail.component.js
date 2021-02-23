/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-detail/event-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';
var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(eventsService, _router) {
        this.eventsService = eventsService;
        this._router = _router;
    }
    /**
     * @return {?}
     */
    EventDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.identifier = this.configData['identifier'];
        console.log(this.configData['identifier']);
        this.eventsService.getEvent().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.item = data.data.result[0];
            console.log();
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
    EventDetailComponent.prototype.joinEvent = /**
     * @return {?}
     */
    function () {
        //alert('hi');
        this._router.navigate(['/events']);
    };
    EventDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-event-detail',
                    template: "\n<div class=\"sb_page_margin body\">\n    <div class=\"row\">\n        <div class=\"column_50_icon\">\n            <img alt=\"\" class=\"sb_event_cover\" src=\"{{item.avatar}}\" />\n        </div>\n\n        <div class=\"column_50_title sb_left_padding\">\n            <h2>{{item.title}}</h2>\n            <span>by {{item.creator}}</span>\n            <div>\n                <div>\n                    <h4> <i class=\"fa fa-calendar fa-5x\"></i> Event Date and Time</h4>\n                </div>\n                <span>{{item.startdate}} - {{item.enddate}}</span>\n            </div>\n\n            <button (click)=\"joinEvent()\" class=\"sb-join-button sb-join-button-color\">Join</button>\n\n          \n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div>\n            <h3>Event Detail</h3>\n            <p>Don't miss this chance to watch all your favourite car brands under one roof with the Philadelphia Car\n                Show 2018. Philadelphia Car Show 2018 will feature some classic sports cars, SUV's,sedans, luxury cars\n                and much more! You can also get to interact with the various representatives associated ...Read More</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div>\n            <h3> <i class=\"fa fa-map-marker fa-5x\"></i> Event Location</h3>\n            <p>{{item.location}}</p>\n        </div>\n    </div>\n\n</div>",
                    styles: [".body{color:#555;font-family:Poppins;font-weight:400;font-size:14px;line-height:1.5}.sb_page_margin{margin:25px}.sb_left_padding{padding-left:20px}.sb_event_cover{width:100%;max-height:350px;-o-object-fit:cover;object-fit:cover;height:300px}.column_50_icon{float:left;width:35%;height:auto;background-color:#acaaaa21}.column_50_title{float:left;width:63%;height:auto;background-color:#acaaaa21}.row{width:100%;display:flex}h2{font-size:25px}h4{font-size:16px;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-after:.2em;margin-block-end:.2em}span{font-size:15px;font-weight:lighter}@media only screen and (max-width:600px){h4{font-size:12px;-webkit-margin-before:.5em;margin-block-start:.5em;-webkit-margin-after:.1em;margin-block-end:.1em}span{font-size:8px;font-weight:lighter}h2{font-size:14px;-webkit-margin-after:-.5em;margin-block-end:-.5em}}.fa-5x{font-size:1.2em}.sb-join-button{border:none;color:#fff;padding:12px 99px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:15px 0;cursor:pointer}.sb-join-button-color{background-color:#4caf50}"]
                }] }
    ];
    /** @nocollapse */
    EventDetailComponent.ctorParameters = function () { return [
        { type: EventsService },
        { type: Router }
    ]; };
    EventDetailComponent.propDecorators = {
        configData: [{ type: Input }]
    };
    return EventDetailComponent;
}());
export { EventDetailComponent };
if (false) {
    /** @type {?} */
    EventDetailComponent.prototype.configData;
    /** @type {?} */
    EventDetailComponent.prototype.identifier;
    /** @type {?} */
    EventDetailComponent.prototype.item;
    /**
     * @type {?}
     * @private
     */
    EventDetailComponent.prototype.eventsService;
    /**
     * @type {?}
     * @private
     */
    EventDetailComponent.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekM7SUFTRSw4QkFBb0IsYUFBNEIsRUFBVSxPQUFlO1FBQXJELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUV6RSxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUF1QjtZQUM1RCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQixDQUFDOzs7O1FBQ0QsVUFBQyxHQUFRO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsd0NBQVM7OztJQUFUO1FBRUUsY0FBYztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLCszQ0FBNEM7O2lCQUU3Qzs7OztnQkFSUSxhQUFhO2dCQUViLE1BQU07Ozs2QkFRWixLQUFLOztJQXlCUiwyQkFBQztDQUFBLEFBL0JELElBK0JDO1NBMUJZLG9CQUFvQjs7O0lBQy9CLDBDQUF5Qjs7SUFDekIsMENBQW1COztJQUNsQixvQ0FBVTs7Ozs7SUFDQyw2Q0FBb0M7Ozs7O0lBQUUsdUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOZ1RlbXBsYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJdGVyYWJsZURpZmZlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudHMuc2VydmljZSc7XG5pbXBvcnQgeyBJRXZlbnREYXRhIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9ldmVudCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYi1ldmVudC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFdmVudERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbmZpZ0RhdGE6IGFueTtcbiAgaWRlbnRpZmllcjogbnVtYmVyO1xuICAgaXRlbTogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50c1NlcnZpY2U6IEV2ZW50c1NlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaWRlbnRpZmllciA9IHRoaXMuY29uZmlnRGF0YVsnaWRlbnRpZmllciddO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnRGF0YVsnaWRlbnRpZmllciddKTtcblxuICAgIHRoaXMuZXZlbnRzU2VydmljZS5nZXRFdmVudCgpLnN1YnNjcmliZSgoZGF0YTogSUV2ZW50RGF0YS5JRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5pdGVtID0gZGF0YS5kYXRhLnJlc3VsdFswXTtcbiAgICAgICAgY29uc29sZS5sb2coKTtcbiAgICAgIH0sXG4gICAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VyciA9ICcsIGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGpvaW5FdmVudCgpXG4gIHtcbiAgICAvL2FsZXJ0KCdoaScpO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9ldmVudHMnXSk7XG4gIH1cbn1cblxuXG5cblxuXG4iXX0=