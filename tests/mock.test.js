const say = require("../js files/sayHello");

test("say", () => {
    const mocker = jest.fn((name) => `Hello ${name}`);
    expect(mocker("Abram")).toBe("Hello Abram");
    expect(mocker("Emad")).toBe("Hello Emad");
    expect(mocker).toHaveBeenCalled();
    expect(mocker).toHaveBeenCalledTimes(2);
    expect(mocker).toHaveBeenCalledWith("Abram");
    expect(mocker).toHaveBeenLastCalledWith("Emad");
});

