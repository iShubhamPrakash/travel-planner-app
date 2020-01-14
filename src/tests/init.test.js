const { init } = require('../client/js/app');

describe("init() function", () => {
  test("should be defined", async () => {
    expect(init).toBeDefined();
  });
});
