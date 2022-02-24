import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventFilterComponent } from './components/event-filter/event-filter.component';
import{ CoverEventDetailComponent } from './components/cover-event-detail/cover-event-detail.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/event', pathMatch: 'full' },
  { path: 'events', component: EventListComponent },
  { path: 'event', component: EventDetailComponent },
  { path: 'event-post', component: EventCreateComponent },
  { path: 'event-filter', component: EventFilterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class EventRoutingModule { }
