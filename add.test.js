const add = require('./add.js');
let input, result;

const assert = function(result, expected, message) {
    if (result !== expected)
        throw Error(`Assert failed: result: ${result} expected: ${expected} ${message || ''}`);
};

input = '';
result = add(input);
console.log({input, result});
assert(result, 0);

input = '1';
result = add(input);
console.log({input, result});
assert(result, 1);

input = '1,2,3';
result = add(input);
console.log({input, result});
assert(result, 6);

input = '1,1001,3,4';
result = add(input);
console.log({input, result});
assert(result, 8);