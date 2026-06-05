const { roast } = require("../src/roast");

test("roast returns a string", () => {
    expect(typeof roast()).toBe("string");
});