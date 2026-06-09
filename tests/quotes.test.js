const { quote, quoteData } = require("../src/quotes");

test("quote returns a string", () => {
  expect(typeof quote()).toBe("string");
});

test("quoteData returns an object", () => {
  expect(typeof quoteData()).toBe("object");
});
