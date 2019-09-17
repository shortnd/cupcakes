import { TestBed } from '@angular/core/testing';

import { FileReadServiceService } from './file-read-service.service';

describe('FileReadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileReadServiceService = TestBed.get(FileReadServiceService);
    expect(service).toBeTruthy();
  });
});
