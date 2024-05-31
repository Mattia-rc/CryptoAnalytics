import { TestBed } from '@angular/core/testing';

import { ServicioApiHomeService } from './servicio-api-home.service';

describe('ServicioApiHomeService', () => {
  let service: ServicioApiHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioApiHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
