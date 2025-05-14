import { TestBed } from '@angular/core/testing';

import { AlumnesService } from './alumnes.service';

describe('AlumnesService', () => {
  let service: AlumnesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
