import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAlumnesComponent } from './manage-alumnes.component';

describe('ManageAlumnesComponent', () => {
  let component: ManageAlumnesComponent;
  let fixture: ComponentFixture<ManageAlumnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAlumnesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAlumnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
