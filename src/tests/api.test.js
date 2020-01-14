const { submitToEvaluate } = require('../client/js/api');

describe("submitToEvaluate() function", () => {
  
  test("should be defined", async () => {
    // actual test
    expect(submitToEvaluate).toBeDefined();
  });

  test('should be a function', async () => {
    expect(typeof submitToEvaluate).toBe("function");
  });
});
