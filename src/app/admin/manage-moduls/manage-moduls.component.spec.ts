import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageModulsComponent } from './manage-moduls.component';

describe('ManageModulsComponent', () => {
  let component: ManageModulsComponent;
  let fixture: ComponentFixture<ManageModulsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageModulsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageModulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
