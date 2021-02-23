/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-detail/event-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';
export class EventDetailComponent {
    /**
     * @param {?} eventsService
     * @param {?} _router
     */
    constructor(eventsService, _router) {
        this.eventsService = eventsService;
        this._router = _router;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.identifier = this.configData['identifier'];
        console.log(this.configData['identifier']);
        this.eventsService.getEvent().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.item = data.data.result[0];
            console.log();
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
    joinEvent() {
        //alert('hi');
        this._router.navigate(['/events']);
    }
}
EventDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-event-detail',
                template: "\n<div class=\"sb_page_margin body\">\n    <div class=\"row\">\n        <div class=\"column_50_icon\">\n            <img alt=\"\" class=\"sb_event_cover\" src=\"{{item.avatar}}\" />\n        </div>\n\n        <div class=\"column_50_title sb_left_padding\">\n            <h2>{{item.title}}</h2>\n            <span>by {{item.creator}}</span>\n            <div>\n                <div>\n                    <h4> <i class=\"fa fa-calendar fa-5x\"></i> Event Date and Time</h4>\n                </div>\n                <span>{{item.startdate}} - {{item.enddate}}</span>\n            </div>\n\n            <button (click)=\"joinEvent()\" class=\"sb-join-button sb-join-button-color\">Join</button>\n\n          \n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div>\n            <h3>Event Detail</h3>\n            <p>Don't miss this chance to watch all your favourite car brands under one roof with the Philadelphia Car\n                Show 2018. Philadelphia Car Show 2018 will feature some classic sports cars, SUV's,sedans, luxury cars\n                and much more! You can also get to interact with the various representatives associated ...Read More</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div>\n            <h3> <i class=\"fa fa-map-marker fa-5x\"></i> Event Location</h3>\n            <p>{{item.location}}</p>\n        </div>\n    </div>\n\n</div>",
                styles: [".body{color:#555;font-family:Poppins;font-weight:400;font-size:14px;line-height:1.5}.sb_page_margin{margin:25px}.sb_left_padding{padding-left:20px}.sb_event_cover{width:100%;max-height:350px;-o-object-fit:cover;object-fit:cover;height:300px}.column_50_icon{float:left;width:35%;height:auto;background-color:#acaaaa21}.column_50_title{float:left;width:63%;height:auto;background-color:#acaaaa21}.row{width:100%;display:flex}h2{font-size:25px}h4{font-size:16px;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-after:.2em;margin-block-end:.2em}span{font-size:15px;font-weight:lighter}@media only screen and (max-width:600px){h4{font-size:12px;-webkit-margin-before:.5em;margin-block-start:.5em;-webkit-margin-after:.1em;margin-block-end:.1em}span{font-size:8px;font-weight:lighter}h2{font-size:14px;-webkit-margin-after:-.5em;margin-block-end:-.5em}}.fa-5x{font-size:1.2em}.sb-join-button{border:none;color:#fff;padding:12px 99px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:15px 0;cursor:pointer}.sb-join-button-color{background-color:#4caf50}"]
            }] }
];
/** @nocollapse */
EventDetailComponent.ctorParameters = () => [
    { type: EventsService },
    { type: Router }
];
EventDetailComponent.propDecorators = {
    configData: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPekMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFJL0IsWUFBb0IsYUFBNEIsRUFBVSxPQUFlO1FBQXJELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUV6RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQXVCLEVBQUUsRUFBRTtZQUNoRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQixDQUFDOzs7O1FBQ0QsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFNBQVM7UUFFUCxjQUFjO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsKzNDQUE0Qzs7YUFFN0M7Ozs7WUFSUSxhQUFhO1lBRWIsTUFBTTs7O3lCQVFaLEtBQUs7Ozs7SUFBTiwwQ0FBeUI7O0lBQ3pCLDBDQUFtQjs7SUFDbEIsb0NBQVU7Ozs7O0lBQ0MsNkNBQW9DOzs7OztJQUFFLHVDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTmdUZW1wbGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSXRlcmFibGVEaWZmZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUV2ZW50RGF0YSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZXZlbnQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ItZXZlbnQtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V2ZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V2ZW50LWRldGFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXZlbnREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb25maWdEYXRhOiBhbnk7XG4gIGlkZW50aWZpZXI6IG51bWJlcjtcbiAgIGl0ZW06IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudHNTZXJ2aWNlOiBFdmVudHNTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSB0aGlzLmNvbmZpZ0RhdGFbJ2lkZW50aWZpZXInXTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZ0RhdGFbJ2lkZW50aWZpZXInXSk7XG5cbiAgICB0aGlzLmV2ZW50c1NlcnZpY2UuZ2V0RXZlbnQoKS5zdWJzY3JpYmUoKGRhdGE6IElFdmVudERhdGEuSUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuaXRlbSA9IGRhdGEuZGF0YS5yZXN1bHRbMF07XG4gICAgICAgIGNvbnNvbGUubG9nKCk7XG4gICAgICB9LFxuICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnIgPSAnLCBlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBqb2luRXZlbnQoKVxuICB7XG4gICAgLy9hbGVydCgnaGknKTtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZXZlbnRzJ10pO1xuICB9XG59XG5cblxuXG5cblxuIl19