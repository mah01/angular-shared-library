import { TestBed } from '@angular/core/testing';

import { TesthestLibraryService } from './testhest-library.service';

describe('TesthestLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesthestLibraryService = TestBed.get(TesthestLibraryService);
    expect(service).toBeTruthy();
  });
});
