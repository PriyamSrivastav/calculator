const add = require('./stringCalculator');

// 1. Case:   Return Zero for an empty string 
describe('add function',()=>{
test('return 0 for an empty string',()=>{
    expect(add('')).toBe(0);
});

test('return the number itself for single number',()=>{
    expect(add('1')).toBe(1);
});
})