import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBooksComponent } from './e-books.component';

describe('EBooksComponent', () => {
  let component: EBooksComponent;
  let fixture: ComponentFixture<EBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EBooksComponent]
    });
    fixture = TestBed.createComponent(EBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
