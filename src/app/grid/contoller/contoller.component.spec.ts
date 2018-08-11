import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContollerComponent } from './contoller.component';

describe('ContollerComponent', () => {
  let component: ContollerComponent;
  let fixture: ComponentFixture<ContollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
