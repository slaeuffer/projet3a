import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservateDialogComponent } from './reservate-dialog.component';

describe('ReservateDialogComponent', () => {
  let component: ReservateDialogComponent;
  let fixture: ComponentFixture<ReservateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
