const theFilter = require("../js files/input");

describe("Validate The Input Field", () => {
    test.only("if there is no name", () => {
        expect(theFilter()).toBe("Unknown");
    });
    test("removing spaces", () => {
        expect(theFilter(" abram")).toBe("abram");
    });
    test("removing first '_'", () => {
        expect(theFilter("_abram")).toBe("abram");
    });
    test("the field dosen't accept more than 10 numbers", () => {
        expect(theFilter("abram emad mharous")).toBe("abram emad");
    });
});