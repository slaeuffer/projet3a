import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskGeolocationModalComponent } from './ask-geolocation-modal.component';

describe('AskGeolocationModalComponent', () => {
  let component: AskGeolocationModalComponent;
  let fixture: ComponentFixture<AskGeolocationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskGeolocationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskGeolocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
