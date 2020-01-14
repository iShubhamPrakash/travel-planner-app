const { apiUrl } = require('../client/js/config');

describe("Testing config-", () => {
  test("The value of apiUrl should not be undefined", () => {
    expect(apiUrl).not.toBeUndefined();
  });
  
  test("The value of apiUrl should be a correct API endpoint url", () => {
    expect(apiUrl=== 'http://localhost:8000/evaluate' || apiUrl=== 'https://evaluate-text-with-nlp.herokuapp.com/evaluate').toBeTruthy();
  });
});
