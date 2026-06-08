const { joke, dad_joke, get_joke, get_dad_joke } = require("../src/jokes");

test("joke returns a string", () => {
  expect(typeof joke()).toBe("string");
});

test("joke returns a string", () => {
  expect(typeof get_joke()).toBe("string");
});

test("dadJoke returns a string", () => {
  expect(typeof dad_joke()).toBe("string");
});

test("dadjoke returns a string", () => {
  expect(typeof get_dad_joke()).toBe("string");
});

test("version is correct", () => {
  const { getVersion } = require("../src/version");
  expect(getVersion()).toBe("0.2.0");
});
