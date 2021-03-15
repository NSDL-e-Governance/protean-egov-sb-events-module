import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { JoinEventComponent } from './components/join-event-button/join-event-button.component';
import { AdvanceEventDetailComponent } from './components/advance-event-detail/advance-event-detail.component';
import { CoverEventDetailComponent } from './components/cover-event-detail/cover-event-detail.component';
import { EventFilterComponent} from '../events/components/event-filter/event-filter.component';
import { EventLibraryRoutingModule } from './event-routing.module';

import { FormsModule } from '@angular/forms';
import { CommonFormElementsModule } from 'common-form-elements';

@NgModule({
  declarations: [
    EventDetailComponent, 
    EventListComponent, 
    EventCreateComponent,
    JoinEventComponent,
    AdvanceEventDetailComponent,
    CoverEventDetailComponent,
    EventFilterComponent
  ],
  imports: [
    CommonModule,
    CommonFormElementsModule,
    FormsModule,
    EventLibraryRoutingModule,
  ],
  exports: [
    EventDetailComponent,
    EventListComponent,
    EventCreateComponent,
    JoinEventComponent,
    AdvanceEventDetailComponent,
    CoverEventDetailComponent,
    EventFilterComponent
  ],
  providers: [ ]
})
export class EventsModule { }
