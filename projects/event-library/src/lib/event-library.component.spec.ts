import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventModuleComponent } from './event-library.component';

describe('EventModuleComponent', () => {
  let component: EventModuleComponent;
  let fixture: ComponentFixture<EventModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
