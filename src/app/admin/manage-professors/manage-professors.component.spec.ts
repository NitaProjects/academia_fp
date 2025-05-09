import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProfessorsComponent } from './manage-professors.component';

describe('ManageProfessorsComponent', () => {
  let component: ManageProfessorsComponent;
  let fixture: ComponentFixture<ManageProfessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageProfessorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
