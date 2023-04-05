import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommentboxComponent } from './commentbox.component';

describe('CommentboxComponent', () => {
  let component: CommentboxComponent;
  let fixture: ComponentFixture<CommentboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentboxComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
