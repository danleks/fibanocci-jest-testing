const fibonacci = require('../src/fibonacci');

test('Check if fibonacci function exists.', () => {
    expect(fibonacci).toBeDefined();
});

test('Test for valid input. If input is a valid number function is expected to be truthy', () => {
    expect(fibonacci(5)).toBeTruthy();
});

test('Test for invalid input. If input is invalid function is expected to return false.', () => {
    const flasyValues = [-1, 'string', null, undefined, '', Number('abc'), {}, [1,2], [], Number('2a'), 3.5];
    for (const falsyValue of flasyValues) {
        expect(fibonacci(falsyValue)).toBeFalsy();
    };
});

test("Test if fibonacci(0) === 0", () => {
    expect(fibonacci(0)).toBe(0);
});

test("Test if fibonacci(1) === 1", () => {
    expect(fibonacci(1)).toBe(1);
});

test("Test if the fibonacci sequence is generated", () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibonacci(100)).toEqual([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578,5702887,9227465,14930352,24157817,39088169,63245986,102334155,165580141,267914296,433494437,701408733,1134903170,1836311903,2971215073,4807526976,7778742049,12586269025,20365011074,32951280099,53316291173,86267571272,139583862445,225851433717,365435296162,591286729879,956722026041,1548008755920,2504730781961,4052739537881,6557470319842,10610209857723,17167680177565,27777890035288,44945570212853,72723460248141,117669030460994,190392490709135,308061521170129,498454011879264,806515533049393,1304969544928657,2111485077978050,3416454622906707,5527939700884757,8944394323791464,14472334024676220,23416728348467684,37889062373143900,61305790721611580,99194853094755490,160500643816367070,259695496911122560,420196140727489660,679891637638612200,1100087778366101900,1779979416004714000,2880067194370816000,4660046610375530000,7540113804746346000,12200160415121877000,19740274219868226000,31940434634990100000,51680708854858330000,83621143489848430000,135301852344706760000,218922995834555200000]);
});

test('Test if generated sequence length corresponds to the parameter passed', () => {
    expect(fibonacci(45)).toHaveLength(45);
    expect(fibonacci(2000)).toHaveLength(2000);
});