import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewBooksComponent } from './request-new-books.component';

describe('RequestNewBooksComponent', () => {
  let component: RequestNewBooksComponent;
  let fixture: ComponentFixture<RequestNewBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestNewBooksComponent]
    });
    fixture = TestBed.createComponent(RequestNewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
