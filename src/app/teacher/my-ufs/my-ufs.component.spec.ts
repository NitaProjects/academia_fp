import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUfsComponent } from './my-ufs.component';

describe('MyUfsComponent', () => {
  let component: MyUfsComponent;
  let fixture: ComponentFixture<MyUfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyUfsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
