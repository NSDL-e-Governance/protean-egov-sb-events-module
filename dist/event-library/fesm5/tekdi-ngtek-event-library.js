import { Injectable, ɵɵdefineInjectable, Component, ɵɵinject, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonFormElementsModule } from 'common-form-elements';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/event-library.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EventModuleService = /** @class */ (function () {
    function EventModuleService() {
    }
    EventModuleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EventModuleService.ctorParameters = function () { return []; };
    /** @nocollapse */ EventModuleService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EventModuleService_Factory() { return new EventModuleService(); }, token: EventModuleService, providedIn: "root" });
    return EventModuleService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/event-library.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EventModuleComponent = /** @class */ (function () {
    function EventModuleComponent() {
    }
    /**
     * @return {?}
     */
    EventModuleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    EventModuleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-event-library',
                    template: "\n    <p>\n      event-library works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    EventModuleComponent.ctorParameters = function () { return []; };
    return EventModuleComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/events.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ EventsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EventsService_Factory() { return new EventsService(ɵɵinject(HttpClient)); }, token: EventsService, providedIn: "root" });
    return EventsService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventsService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-detail/event-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-list/event-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EventListComponent = /** @class */ (function () {
    function EventListComponent() {
    }
    /**
     * @return {?}
     */
    EventListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    EventListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-event-list',
                    template: "\n\n<div>This is Event List Page</div>\n\n<p> updated</p>\n\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    EventListComponent.ctorParameters = function () { return []; };
    return EventListComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-create/event-create.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/events.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EventsModule = /** @class */ (function () {
    function EventsModule() {
    }
    EventsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EventDetailComponent, EventListComponent, EventCreateComponent],
                    imports: [
                        CommonModule,
                        CommonFormElementsModule
                    ],
                    exports: [
                        EventDetailComponent, EventListComponent, EventCreateComponent
                    ]
                },] }
    ];
    return EventsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/event-library.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EventLibraryModule = /** @class */ (function () {
    function EventLibraryModule() {
    }
    EventLibraryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EventModuleComponent],
                    imports: [
                        EventsModule,
                        HttpClientModule,
                        //CommonFormElementsModule,
                        //EventLibraryRoutingModule,
                        MatSliderModule,
                        BrowserAnimationsModule
                    ],
                    exports: [EventsModule,
                        MatSliderModule]
                },] }
    ];
    return EventLibraryModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: tekdi-ngtek-event-library.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EventCreateComponent, EventDetailComponent, EventLibraryModule, EventListComponent, EventModuleComponent, EventModuleService, EventsModule as ɵa, EventsService as ɵb };
//# sourceMappingURL=tekdi-ngtek-event-library.js.map
