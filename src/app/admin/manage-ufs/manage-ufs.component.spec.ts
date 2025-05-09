import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUfsComponent } from './manage-ufs.component';

describe('ManageUfsComponent', () => {
  let component: ManageUfsComponent;
  let fixture: ComponentFixture<ManageUfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUfsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
