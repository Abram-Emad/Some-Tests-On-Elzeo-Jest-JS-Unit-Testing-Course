test("check if variable is undefined", () => {
    let a;
    expect(a).toBeUndefined()
});

test("Check For Substring Inside String By RegExp", () => {
    let str = "Abram Emad";
    expect(str).toMatch(/Abram/)
});

test("check for proparity in an object", () => {
    let obj1 = {
        name: "Abram",
        age: 22
    }
    expect(obj1).toHaveProperty("name")
});

test("check for proparity in an obj", () => {
    let obj1 = {
        name: "Abram",
        age: 22
    }
    expect(obj1).toHaveProperty("age", 22)
});

test("expect any thing", () => {
    let y = "AE";
    expect(y).toEqual(expect.anything())
    expect(1).toEqual(expect.anything())
    expect("Abram").toEqual(expect.anything())
});

test("expect any constructor", () => {
    expect("Abram").toEqual(expect.any(String))
    expect(22).toEqual(expect.any(Number))
});

test("Expect Array To Be Found In The Main Array", () => {
    const myArray = [1, 2, 3, 4, 5, 6];
    expect(myArray).toEqual(expect.arrayContaining([5, 3, 4, 6]));
});