import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkfeedAddComponent } from './porkfeed-add.component';

describe('PorkfeedAddComponent', () => {
  let component: PorkfeedAddComponent;
  let fixture: ComponentFixture<PorkfeedAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorkfeedAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorkfeedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
