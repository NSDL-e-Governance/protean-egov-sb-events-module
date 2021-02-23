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
export class EventLibraryModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudC1saWJyYXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFJeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBZS9FLE1BQU0sT0FBTyxrQkFBa0I7OztZQWI5QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUUsb0JBQW9CLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsMkJBQTJCO29CQUMzQiw0QkFBNEI7b0JBQzVCLGVBQWU7b0JBQ2YsdUJBQXVCO2lCQUN0QjtnQkFDSCxPQUFPLEVBQUUsQ0FBQyxZQUFZO29CQUNwQixlQUFlLENBQUM7YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRzTW9kdWxlIH0gZnJvbSAnLi9ldmVudHMvZXZlbnRzLm1vZHVsZSc7XG5pbXBvcnQgeyBFdmVudE1vZHVsZUNvbXBvbmVudH0gZnJvbSAnLi9ldmVudC1saWJyYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy9pbXBvcnQgeyBFdmVudExpYnJhcnlSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9ldmVudC1saWJyYXJ5LXJvdXRpbmcubW9kdWxlJztcblxuLy9pbXBvcnQgeyBDb21tb25Gb3JtRWxlbWVudHNNb2R1bGUgfSBmcm9tICdjb21tb24tZm9ybS1lbGVtZW50cyc7XG5pbXBvcnQgeyBNYXRTbGlkZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsgRXZlbnRNb2R1bGVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgRXZlbnRzTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgLy9Db21tb25Gb3JtRWxlbWVudHNNb2R1bGUsXG4gICAgLy9FdmVudExpYnJhcnlSb3V0aW5nTW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxuICAgIF0sXG4gIGV4cG9ydHM6IFtFdmVudHNNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBFdmVudExpYnJhcnlNb2R1bGUgeyB9XG4iXX0=