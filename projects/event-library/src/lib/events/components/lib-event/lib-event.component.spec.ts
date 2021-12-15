import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibEventComponent } from './lib-event.component';

describe('LibEventComponent', () => {
  let component: LibEventComponent;
  let fixture: ComponentFixture<LibEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
