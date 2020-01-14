// This test is for src/client/app.js 

const { init } = require('../client/js/app');

describe("init() function", () => {
  
  test("should be defined", async () => {
    expect(init).toBeDefined();
  });

  test('should be a function', async () => {
    expect(typeof init).toBe("function");
  });
});
