const { validatePlace } = require('../client/js/util');

describe("validatePlace() Function", () => {
  test("it should return true for a correct string passed as argument", () => {
    // actual test
    const result = validatePlace("India");
    expect(result).toBe(true);
  });

  test("it should return false no string is passed as argument", () => {
    // actual test
    const result = validatePlace("");
    expect(result).toBe(false);
  });
});