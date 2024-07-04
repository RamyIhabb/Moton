import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetalisComponent } from './events-detalis.component';

describe('EventsDetalisComponent', () => {
  let component: EventsDetalisComponent;
  let fixture: ComponentFixture<EventsDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsDetalisComponent]
    });
    fixture = TestBed.createComponent(EventsDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
