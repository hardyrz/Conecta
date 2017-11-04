import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationNumberComponent } from './notification-number.component';

describe('NotificationNumberComponent', () => {
  let component: NotificationNumberComponent;
  let fixture: ComponentFixture<NotificationNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
