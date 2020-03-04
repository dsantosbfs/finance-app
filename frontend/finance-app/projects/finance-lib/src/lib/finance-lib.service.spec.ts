import { TestBed } from '@angular/core/testing';

import { FinanceLibService } from './finance-lib.service';

describe('FinanceLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinanceLibService = TestBed.get(FinanceLibService);
    expect(service).toBeTruthy();
  });
});
