import { TestBed } from '@angular/core/testing';

import { PokemonfetchService } from './pokemonfetch.service';

describe('PokemonfetchService', () => {
  let service: PokemonfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
