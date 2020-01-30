const { submitToServer } = require('../client/js/api');

describe("submitToServer() function", () => {

  test("should be defined", async () => {
    // actual test
    expect(submitToServer).toBeDefined();
  });

  test('should be a function', async () => {
    expect(typeof submitToServer).toBe("function");
  });
});
