import { afterEach, describe, expect, it, vi } from 'vitest';

import { isPhone } from './isPhone';

describe('isPhone', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it.each([
    [
      'desktop Chrome',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
      false,
    ],
    [
      // iPadOS requests desktop sites, and gets Bandcamp's desktop page.
      'iPad Safari',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15',
      false,
    ],
    [
      'iPhone Safari',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
      true,
    ],
    [
      'Firefox for Android',
      'Mozilla/5.0 (Android 14; Mobile; rv:130.0) Gecko/130.0 Firefox/130.0',
      true,
    ],
  ])('for %s', (_name, userAgent, expected) => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(userAgent);

    expect(isPhone()).toBe(expected);
  });
});
