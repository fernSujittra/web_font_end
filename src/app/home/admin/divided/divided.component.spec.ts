import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividedComponent } from './divided.component';

describe('DividedComponent', () => {
  let component: DividedComponent;
  let fixture: ComponentFixture<DividedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
