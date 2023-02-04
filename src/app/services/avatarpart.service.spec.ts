import { TestBed } from '@angular/core/testing';

import { AvatarpartService } from './avatarpart.service';

describe('AvatarpartService', () => {
  let service: AvatarpartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarpartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
