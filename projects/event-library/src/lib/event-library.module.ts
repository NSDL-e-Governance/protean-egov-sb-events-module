import { NgModule, ModuleWithProviders } from '@angular/core';
import { EventsModule } from './events/events.module';
import { EventLibraryComponent } from './event-library.component';
import { HttpClientModule } from '@angular/common/http';
// import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { EventDetailService } from './events/services/event-detail/event-detail.service';
import { EventCreateService } from './events/services/event-create/event-create.service';
import { EventFilterService } from './events/services/event-filters/event-filters.service';
import { EventLibraryService } from './event-library.service';
import { EventListService } from './events/services/event-list/event-list.service';
import { SbToastService } from './events/services/iziToast/izitoast.service';
import { TimezoneCal } from './events/services/timezone/timezone.service';
import { UserConfigService } from './events/services/userConfig/user-config.service';
import { DataService } from './events/services/data-request/data-request.service';
import { EventService } from "./events/services/event/event.service";
// import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [EventLibraryComponent],
  imports: [
    EventsModule,
    HttpClientModule,
    // TranslateModule.forChild({ isolate: true }),
    // TranslateModule
    // BrowserAnimationsModule,
    // SlickCarouselModule
  ],
  exports: [EventsModule,
    // TranslateModule
  ],
  providers: [
    EventDetailService,
    EventCreateService,
    EventListService,
    EventFilterService,
    // EventLibraryService,
    SbToastService,
    TimezoneCal,
    UserConfigService,
    DataService,
    EventService,
    // TranslateService
  ]
})
export class EventLibraryModule {
    public static forChild(config: any): ModuleWithProviders {
      return {
        ngModule: EventLibraryModule,
        providers: [
          // TranslateService,
          EventLibraryService,
          {
            provide: "urlConfig",
            useValue: config
          }
        ]
      };
    }
}
