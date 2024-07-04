import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBoardComponent } from './control-board.component';

describe('ControlBoardComponent', () => {
  let component: ControlBoardComponent;
  let fixture: ComponentFixture<ControlBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlBoardComponent]
    });
    fixture = TestBed.createComponent(ControlBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
