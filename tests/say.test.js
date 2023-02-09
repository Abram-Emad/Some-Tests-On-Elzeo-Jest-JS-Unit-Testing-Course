const say = require("../js files/say");

test("say hello", () => {
    expect(say()).toBe("Hello there");
});

