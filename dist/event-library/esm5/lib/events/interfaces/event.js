/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/interfaces/event.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var IEventData;
(function (IEventData) {
    /**
     * @record
     */
    function IEvent() { }
    IEventData.IEvent = IEvent;
    if (false) {
        /** @type {?} */
        IEvent.prototype.err_msg;
        /** @type {?} */
        IEvent.prototype.err_code;
        /** @type {?} */
        IEvent.prototype.response_id;
        /** @type {?} */
        IEvent.prototype.api;
        /** @type {?} */
        IEvent.prototype.version;
        /** @type {?} */
        IEvent.prototype.data;
    }
    /**
     * @record
     */
    function IEventResult() { }
    IEventData.IEventResult = IEventResult;
    if (false) {
        /** @type {?} */
        IEventResult.prototype.id;
        /** @type {?} */
        IEventResult.prototype.title;
        /** @type {?} */
        IEventResult.prototype.description;
        /** @type {?} */
        IEventResult.prototype.book_start_date;
        /** @type {?} */
        IEventResult.prototype.book_end_date;
        /** @type {?} */
        IEventResult.prototype.startdate;
        /** @type {?} */
        IEventResult.prototype.enddate;
        /** @type {?} */
        IEventResult.prototype.avatar;
        /** @type {?} */
        IEventResult.prototype.integrid;
        /** @type {?} */
        IEventResult.prototype.location;
        /** @type {?} */
        IEventResult.prototype.checkin;
        /** @type {?} */
        IEventResult.prototype.totaltickets;
        /** @type {?} */
        IEventResult.prototype.soldtickets;
    }
})(IEventData || (IEventData = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvaW50ZXJmYWNlcy9ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sS0FBVyxVQUFVLENBOEIxQjtBQTlCRCxXQUFpQixVQUFVOzs7O0lBRW5CLHFCQVVDOzs7O1FBVE8seUJBQWdCOztRQUNoQiwwQkFBaUI7O1FBQ2pCLDZCQUFvQjs7UUFDcEIscUJBQVk7O1FBQ1oseUJBQWdCOztRQUNoQixzQkFHQzs7Ozs7SUFHVCwyQkFjQzs7OztRQWJPLDBCQUFXOztRQUNYLDZCQUFjOztRQUNkLG1DQUFvQjs7UUFDcEIsdUNBQXdCOztRQUN4QixxQ0FBc0I7O1FBQ3RCLGlDQUFrQjs7UUFDbEIsK0JBQWdCOztRQUNoQiw4QkFBZTs7UUFDZixnQ0FBaUI7O1FBQ2pCLGdDQUFpQjs7UUFDakIsK0JBQWdCOztRQUNoQixvQ0FBcUI7O1FBQ3JCLG1DQUFtQjs7QUFHbkMsQ0FBQyxFQTlCZ0IsVUFBVSxLQUFWLFVBQVUsUUE4QjFCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG5hbWVzcGFjZSBJRXZlbnREYXRhIHtcblxuICAgICAgICBleHBvcnQgaW50ZXJmYWNlIElFdmVudCB7XG4gICAgICAgICAgICAgICAgZXJyX21zZzogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGVycl9jb2RlOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VfaWQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBhcGk6IHN0cmluZyxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBJRXZlbnRSZXN1bHRbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5X21lc3NhZ2U6IHN0cmluZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50UmVzdWx0IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICAgICAgICAgICAgICBib29rX3N0YXJ0X2RhdGU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBib29rX2VuZF9kYXRlOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgc3RhcnRkYXRlOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgZW5kZGF0ZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGF2YXRhcjogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGludGVncmlkOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHN0cmluZyxcbiAgICAgICAgICAgICAgICBjaGVja2luOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgdG90YWx0aWNrZXRzOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgc29sZHRpY2tldHM6IG51bWJlclxuICAgICAgICB9XG5cbn0iXX0=