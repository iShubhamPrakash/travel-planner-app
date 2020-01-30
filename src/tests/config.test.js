const { apiUrl } = require('../client/js/config');

describe("Testing config-", () => {
  test("The value of apiUrl should not be undefined", () => {
    expect(apiUrl).not.toBeUndefined();
  });

  test("The value of apiUrl should be a correct API endpoint url", () => {
    expect(apiUrl=== 'http://localhost:8000' || apiUrl=== 'https://trip-manager-app.herokuapp.com').toBeTruthy();
  });
});
