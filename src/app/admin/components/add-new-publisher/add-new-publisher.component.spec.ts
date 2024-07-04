import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPublisherComponent } from './add-new-publisher.component';

describe('AddNewPublisherComponent', () => {
  let component: AddNewPublisherComponent;
  let fixture: ComponentFixture<AddNewPublisherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewPublisherComponent]
    });
    fixture = TestBed.createComponent(AddNewPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
