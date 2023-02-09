expect.extend({
    toBeBetween(recivied, start, end) {
        const pass = recivied > start && recivied < end;
        if (pass) {
            return {
                message: () => `Expected ${received} To Be Between ${start} And ${end}`,
                pass: true,
            };
        } else {
            return {
                message: () => `Error this what was expected`,
                pass: false,
            };
        }
    }
});

test("checking if a number is in rang or not", () => {
    expect(2000).toBeBetween(1097,2016)
})