import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAvaluacionsComponent } from './manage-avaluacions.component';

describe('ManageAvaluacionsComponent', () => {
  let component: ManageAvaluacionsComponent;
  let fixture: ComponentFixture<ManageAvaluacionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAvaluacionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAvaluacionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
