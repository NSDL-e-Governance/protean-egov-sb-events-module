/**
 * @fileoverview added by tsickle
 * Generated from: lib/event-library.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { EventsModule } from './events/events.module';
import { EventModuleComponent } from './event-library.component';
import { HttpClientModule } from '@angular/common/http';
//import { EventLibraryRoutingModule } from './event-library-routing.module';
//import { CommonFormElementsModule } from 'common-form-elements';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
export { EventLibraryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudC1saWJyYXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFJeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRS9FO0lBQUE7SUFha0MsQ0FBQzs7Z0JBYmxDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBQztvQkFDckMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQiwyQkFBMkI7d0JBQzNCLDRCQUE0Qjt3QkFDNUIsZUFBZTt3QkFDZix1QkFBdUI7cUJBQ3RCO29CQUNILE9BQU8sRUFBRSxDQUFDLFlBQVk7d0JBQ3BCLGVBQWUsQ0FBQztpQkFDbkI7O0lBQ2lDLHlCQUFDO0NBQUEsQUFibkMsSUFhbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50c01vZHVsZSB9IGZyb20gJy4vZXZlbnRzL2V2ZW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgRXZlbnRNb2R1bGVDb21wb25lbnR9IGZyb20gJy4vZXZlbnQtbGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vaW1wb3J0IHsgRXZlbnRMaWJyYXJ5Um91dGluZ01vZHVsZSB9IGZyb20gJy4vZXZlbnQtbGlicmFyeS1yb3V0aW5nLm1vZHVsZSc7XG5cbi8vaW1wb3J0IHsgQ29tbW9uRm9ybUVsZW1lbnRzTW9kdWxlIH0gZnJvbSAnY29tbW9uLWZvcm0tZWxlbWVudHMnO1xuaW1wb3J0IHsgTWF0U2xpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbIEV2ZW50TW9kdWxlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEV2ZW50c01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIC8vQ29tbW9uRm9ybUVsZW1lbnRzTW9kdWxlLFxuICAgIC8vRXZlbnRMaWJyYXJ5Um91dGluZ01vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcbiAgICBdLFxuICBleHBvcnRzOiBbRXZlbnRzTW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRMaWJyYXJ5TW9kdWxlIHsgfVxuIl19