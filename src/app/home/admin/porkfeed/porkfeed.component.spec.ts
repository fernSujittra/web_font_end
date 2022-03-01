import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkfeedComponent } from './porkfeed.component';

describe('PorkfeedComponent', () => {
  let component: PorkfeedComponent;
  let fixture: ComponentFixture<PorkfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorkfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorkfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
