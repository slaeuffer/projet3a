import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlanningDialogComponent } from './planning-dialog.component';

describe('PlanningDialogComponent', () => {
  let component: PlanningDialogComponent;
  let fixture: ComponentFixture<PlanningDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PlanningDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
