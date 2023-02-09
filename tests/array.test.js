const myArray = require("../js files/array");

test("check if the length of the array is 6 with first method", () => {
    expect(myArray.length).toBe(6);
});

test("check if the length of the array is 6 with second method", () => {
    expect(myArray).toHaveLength(6);
});

test("check if the array contain number six", () => {
    expect(myArray).toContain(6);
});

test("check if the array don't contain number three", () => {
    expect(myArray).not.toContain(3);
});

test("check if the array don't contain number zero", () => {
    for (let i = 0; myArray.length > i; i++) {
        expect(myArray[i]).not.toBe(0);
    }
});

test("check if the array don't contain number zero", () => {
    for (let i = 0; myArray.length > i; i++) {
        expect(isNaN(myArray[i])).toBe(false);
    }
});

test("check if the array don't contain number zero", () => {
    for (let i = 0; myArray.length > i; i++) {
        expect(isNaN(myArray[i])).toBeFalsy();
    }
});

test("check if the array don't contain number zero", () => {
    for (let i = 0; myArray.length > i; i++) {
        expect(isNaN(myArray[i])).not.toBeTruthy();
    }
});

test("Check If Array First Element Is Larger Than 1", () => {
    expect(myArray[0]).toBeGreaterThanOrEqual(1);
});

test("Check If Array First Element Is less Than 9", () => {
    expect(myArray[0]).toBeLessThanOrEqual(9);
});

test("Check If Array Second Element Is Larger Than 1", () => {
    expect(myArray[1]).toBeGreaterThan(1);
});

test("Check If Array First Element Is less Than 9", () => {
    expect(myArray[0]).toBeLessThan(9);
});

