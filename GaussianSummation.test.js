const gauss = require('./GaussianSummation');

describe('gauss', () => {
  test('Correct summation for a valid range', () => {
    expect(gauss(1, 10)).toBe(55);
  });

  test('Handle negative numbers correctly', () => {
    expect(gauss(-10, -1)).toBe(-55);
  });

  test('Return the same number if alpha and omega are equal', () => {
    expect(gauss(5, 5)).toBe(5);
  });

  test('Swap alpha and omega if alpha is greater than omega', () => {
    expect(gauss(10, 1)).toBe(55);
  });

  test('Edge cases for large numbers', () => {
    expect(gauss(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(0);
  });

  test('Handle non-integer input and return an error message', () => {
    expect(gauss(1.5, 10)).toBe('(1.5, 10) is invalid input! [0-9] only!');
    expect(gauss(1, 'omega')).toBe('(1, omega) is invalid input! [0-9] only!');
  });
});