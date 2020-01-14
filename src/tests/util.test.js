const { validateURL } = require('../client/js/util');

describe("validateURL() Function", () => {
  test("it should return true for a correct url passed as argument", () => {
    // actual test
    const url = "https://www.google.com";
    const result = validateURL(url);
    expect(result).toBe(true);
  });

  test("it should return false for a wrong url passed as argument", () => {
    // actual test
    const url = "httpswwwgooglecom";
    const result = validateURL(url);
    expect(result).toBe(false);
  });
});