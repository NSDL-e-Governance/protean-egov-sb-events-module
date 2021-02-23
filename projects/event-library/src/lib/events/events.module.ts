import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCreateComponent } from './components/event-create/event-create.component';


import { FormsModule } from '@angular/forms';
import { CommonFormElementsModule } from 'common-form-elements';

//Material 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { EventLibraryRoutingModule } from './event-routing.module';

//services
import { EventDetailService } from './services/event-detail/event-detail.service';
import { EventCreateService } from './services/event-create/event-create.service';

@NgModule({
  declarations: [EventDetailComponent, EventListComponent, EventCreateComponent],
  imports: [
    CommonModule,
    CommonFormElementsModule,
    FormsModule,
    EventLibraryRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule
  ],
  exports: [
    EventDetailComponent,
    EventListComponent,
    EventCreateComponent
  ],
  providers: [
    EventDetailService,
    EventCreateService
  ]
})
export class EventsModule { }
