import { TestBed } from '@angular/core/testing';

import { TablaFestivosService } from './tabla-festivos.service';

describe('TablaFestivosService', () => {
  let service: TablaFestivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaFestivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
