import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkfeedEditComponent } from './porkfeed-edit.component';

describe('PorkfeedEditComponent', () => {
  let component: PorkfeedEditComponent;
  let fixture: ComponentFixture<PorkfeedEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorkfeedEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorkfeedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
