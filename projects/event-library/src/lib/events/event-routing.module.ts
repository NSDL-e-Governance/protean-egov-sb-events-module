import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventCreateComponent } from './components/event-create/event-create.component';


const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'event', component: EventDetailComponent },
  { path: 'event-post', component: EventCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class EventLibraryRoutingModule { }
