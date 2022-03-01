import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareAddComponent } from './share-add.component';

describe('ShareAddComponent', () => {
  let component: ShareAddComponent;
  let fixture: ComponentFixture<ShareAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
