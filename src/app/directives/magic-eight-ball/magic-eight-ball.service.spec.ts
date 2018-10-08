import {TestBed} from '@angular/core/testing';

import {MagicEightBallService} from './magic-eight-ball.service';

describe('MagicEightBallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicEightBallService = TestBed.get(MagicEightBallService);
    expect(service).toBeTruthy();
  });

  it('should return a string with nonzero length', () => {
    const service: MagicEightBallService = TestBed.get(MagicEightBallService);
    let result = service.reveal();
    expect(result).toEqual(jasmine.any(String));
    expect(result.length).toBeGreaterThan(0);
  });

  it('should not return the same value twice in a row', () => {
    const service: MagicEightBallService = TestBed.get(MagicEightBallService);
    let last;
    for (let i = 0; i < 50; ++i) {
      let next = service.reveal();
      expect(next).not.toEqual(last);
      last = next;
    }
  });
});
