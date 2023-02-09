const theSum = require("../js files/sum");
const theAddition = require("../js files/sum")

test("Return zero if there is no number", () => {
    expect(theSum()).toBe(0)
});

test("Return the number", () => {
    expect(theSum(20)).toBe(20)
});

test("Return the sum of the two number", () => {
    expect(theSum(10, 50)).toBe(60)
});

test("Return the sum of the three number", () => {
    expect(theSum(10, 50, 80)).toBe(140)
});

test("Return the sum of the four number", () => {
    expect(theSum(10, 50, 100, 200)).toBe(360)
});

describe.skip("Check The Numbers Sum Total", () => {
    test("Return zero if there is no number", () => {
        expect(theAddition()).toBe(0)
    });

    test("Return the number", () => {
        expect(theAddition(20)).toBe(20)
    });

    test("Return the sum of the two number", () => {
        expect(theAddition(10, 50)).toBe(60)
    });

    test("Return the sum of the three number", () => {
        expect(theAddition(10, 50, 80)).toBe(140)
    });

    test("Return the sum of the four number", () => {
        expect(theAddition(10, 50, 100, 200)).toBe(360)
    });
});
