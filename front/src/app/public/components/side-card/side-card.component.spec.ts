import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SideCardComponent } from './side-card.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('SideCardComponent', () => {
  let component: SideCardComponent;
  let fixture: ComponentFixture<SideCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCardComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
