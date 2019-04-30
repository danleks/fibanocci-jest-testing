const fibonacci = require('../src/fibonacci');

test('Check if fibonacci function exists.', () => {
    expect(fibonacci).toBeDefined();
});

test('Test for valid input. If input is a valid number function is expected to be truthy', () => {
    expect(fibonacci(5)).toBeTruthy();
});

test('Test for invalid input. If input is invalid function is expected to return false.', () => {
    const flasyValues = [-1, 'string', null, undefined, '', Number('abc'), {}, [1,2], []];
    for (const falsyValue of flasyValues) {
        expect(fibonacci(falsyValue)).toBeFalsy();
    };
});

test("Test if Fib(0) === 0", () => {
    expect(fibonacci(0)).toBe(0);
});

test("Test if Fib(1) === 1", () => {
    expect(fibonacci(1)).toBe(1);
});

test("Test if the fibonacci sequence is generated", () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});

test('Test if generated sequence length corresponds to the parameter passed', () => {
    expect(fibonacci(45)).toHaveLength(45);
});