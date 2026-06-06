const { roast, get_roast } = require("../src/roast");

test("roast returns a string", () => {
  expect(typeof roast()).toBe("string");
});

test("roast returns a string", () => {
  expect(typeof get_roast()).toBe("string");
});
