const { joke, dadJoke } = require("../src/jokes");

test("joke returns a string", () => {
    expect(typeof joke()).toBe("string");
});

test("dadJoke returns a string", () => {
    expect(typeof dadJoke()).toBe("string");
});

test("version is correct", () => {
    const { getVersion } = require("../src/version");
    expect(getVersion()).toBe("0.1.0");
});