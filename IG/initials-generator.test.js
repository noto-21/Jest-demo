const initialsGenerator = require('./initials-generator.js');//Import the initialsGenerator function

describe('initialsGenerator', () => {
  test('Return the correct initials for a valid name', () => {//Test the initialsGenerator function with valid names
    expect(initialsGenerator('Thomas Magnum')).toBe('T.M.\n');
    expect(initialsGenerator('Theodore Calvin')).toBe('T.C.\n');
    expect(initialsGenerator("Orville Wilbur Richard 'Rick' Wright")).toBe('O.W.R.R.W.\n');
    expect(initialsGenerator('J.R.R. Tolkien')).toBe('J.R.R.T.\n');
  });

  test('Return an error message for an invalid name', () => {//Test the initialsGenerator function with invalid names
    expect(initialsGenerator('Bono')).toBe(
      "WARNING! 'Bono' is not a valid name! (Input a valid first and last name (minimum), and separate with a space)\n"
    );
    expect(initialsGenerator('123')).toBe(
      "WARNING! '123' is not a valid name! (Input a valid first and last name (minimum), and separate with a space)\n"
    );
    expect(initialsGenerator(123)).toBe(//Test the initialsGenerator function with invalid types
      "WARNING! '123' is not a valid name! (Input a valid first and last name (minimum), and separate with a space)\n"
    );
    expect(initialsGenerator('NotARealName ')).toBe(//Test the initialsGenerator function with invalid spacing
      "WARNING! 'NotARealName ' is not a valid name! (Input a valid first and last name (minimum), and separate with a space)\n"
    );
    expect(initialsGenerator('\'\'\'\' ....')).toBe(//Test the initialsGenerator function with invalid characters
      "WARNING! '\'\'\'\' ....' is not a valid name! (Input a valid first and last name (minimum), and separate with a space)\n"
    );
  });
});
