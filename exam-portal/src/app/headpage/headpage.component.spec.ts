import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadpageComponent } from './headpage.component';

describe('HeadpageComponent', () => {
  let component: HeadpageComponent;
  let fixture: ComponentFixture<HeadpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
