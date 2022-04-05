import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingDashboardComponent } from './streaming-dashboard.component';

describe('StreamingDashboardComponent', () => {
  let component: StreamingDashboardComponent;
  let fixture: ComponentFixture<StreamingDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamingDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
