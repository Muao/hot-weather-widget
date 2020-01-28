import { TestBed, async, inject } from '@angular/core/testing';

import { ContactGuard } from './contact.guard';

describe('ContactGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactGuard]
    });
  });

  it('should ...', inject([ContactGuard], (guard: ContactGuard) => {
    expect(guard).toBeTruthy();
  }));
});
