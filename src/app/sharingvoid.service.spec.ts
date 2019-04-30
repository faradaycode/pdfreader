import { TestBed } from '@angular/core/testing';

import { SharingvoidService } from './sharingvoid.service';

describe('SharingvoidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharingvoidService = TestBed.get(SharingvoidService);
    expect(service).toBeTruthy();
  });
});
