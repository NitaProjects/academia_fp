import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModulsComponent } from './my-moduls.component';

describe('MyModulsComponent', () => {
  let component: MyModulsComponent;
  let fixture: ComponentFixture<MyModulsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyModulsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyModulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
