import { TestBed, async, inject } from '@angular/core/testing';

import { ConnectedGuard } from './connected.guard';
import { Router } from '@angular/router';

describe('ConnectedGuard', () => {
  let mockRouter: any;
  class MockRouter {
    navigate = jasmine.createSpy('navigate');
  }

  beforeEach(() => {
    mockRouter = new MockRouter();
    TestBed.configureTestingModule({
      providers: [ConnectedGuard,{ provide: Router, useValue: mockRouter }]
    });
  });

  it('should be completed', inject([ConnectedGuard], (guard: ConnectedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
