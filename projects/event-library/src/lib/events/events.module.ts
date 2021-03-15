import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { JoinEventComponent } from './components/join-event-button/join-event-button.component';
import { AdvanceEventDetailComponent } from './components/advance-event-detail/advance-event-detail.component';
import { CoverEventDetailComponent } from './components/cover-event-detail/cover-event-detail.component';


import { FormsModule } from '@angular/forms';
import { CommonFormElementsModule } from 'common-form-elements';
import { EventLibraryRoutingModule } from './event-routing.module';

@NgModule({
  declarations: [
    EventDetailComponent, 
    EventListComponent, 
    EventCreateComponent,
    JoinEventComponent,
    AdvanceEventDetailComponent,
    CoverEventDetailComponent
  ],
  imports: [
    CommonModule,
    CommonFormElementsModule,
    FormsModule,
    EventLibraryRoutingModule
  ],
  exports: [
    EventDetailComponent,
    EventListComponent,
    EventCreateComponent,
    JoinEventComponent,
    AdvanceEventDetailComponent,
    CoverEventDetailComponent
  ],
  providers: [ ]
})
export class EventsModule { }
