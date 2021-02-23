import { NgModule } from '@angular/core';
import { EventsModule } from './events/events.module';
import { EventModuleComponent } from './event-library.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [EventModuleComponent],
  imports: [
    EventsModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
  ],
  exports: [EventsModule,
    MatSliderModule]
})
export class EventLibraryModule { }
