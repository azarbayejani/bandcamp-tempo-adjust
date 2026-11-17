import '@testing-library/jest-dom/vitest';

// jsdom reports Apple as its vendor, which `isWebKit` would read as Safari
// or Orion. Tests run as Chrome unless they say otherwise.
beforeEach(() => {
  vi.spyOn(navigator, 'vendor', 'get').mockReturnValue('Google Inc.');
});
