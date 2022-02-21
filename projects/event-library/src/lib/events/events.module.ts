import { NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { JoinEventComponent } from './components/join-event-button/join-event-button.component';
import { AdvanceEventDetailComponent } from './components/advance-event-detail/advance-event-detail.component';
import { CoverEventDetailComponent } from './components/cover-event-detail/cover-event-detail.component';
import { EventFilterComponent} from '../events/components/event-filter/event-filter.component';
import { EventRoutingModule } from './event-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventCommonFormElementsModule } from 'common-form-elements-event';
import { CommonFormElementsModule } from 'common-form-elements';
import { NgxIziToastModule } from 'ngx-izitoast';
// import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EventCalenderComponent } from './components/event-calender/event-calender.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { FlatpickrModule } from 'angularx-flatpickr';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AssetBrowserComponent } from './components/asset-browser/asset-browser.component'; // <-- import the module
import { SuiModule } from 'ng2-semantic-ui-v9';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EnrollEventUsersComponent } from './components/enroll-event-users/enroll-event-users.component';
import { LibEventComponent } from './components/lib-event/lib-event.component'; // <-- import the module
import { CommonConsumptionModule } from 'common-consumption-v9-event-cards';

@NgModule({
  declarations: [
    EventDetailComponent,
    EventListComponent,
    EventCreateComponent,
    JoinEventComponent,
    AdvanceEventDetailComponent,
    CoverEventDetailComponent,
    EventFilterComponent,
    // EventIconComponent,
    AssetBrowserComponent,
    EventCalenderComponent,
    EnrollEventUsersComponent,
    LibEventComponent
  ],
  imports: [
    CommonModule,
    CommonConsumptionModule,
    EventCommonFormElementsModule,
    CommonFormElementsModule,
    FormsModule,
    ReactiveFormsModule,
    EventRoutingModule,
    NgxIziToastModule,
    HttpClientModule,
    NgxPaginationModule,
    SuiModule,
    InfiniteScrollModule,
    SlickCarouselModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: httpTranslateLoader,
    //     deps: [HttpClient]
    //   }
    // }),

    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  exports: [
    EventDetailComponent,
    EventListComponent,
    EventCreateComponent,
    JoinEventComponent,
    AdvanceEventDetailComponent,
    CoverEventDetailComponent,
    EventFilterComponent,
    EventCalenderComponent,
    EnrollEventUsersComponent,
    LibEventComponent
  ],
  providers: [ ]
})
export class EventsModule { }
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  // return new TranslateHttpLoader(http);
}
