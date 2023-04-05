import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MyusersComponent } from './myusers.component';

describe('MyusersComponent', () => {
  let component: MyusersComponent;
  let fixture: ComponentFixture<MyusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyusersComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
