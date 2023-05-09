const add = require('./stringCalculator');

// 1. Case:   Return Zero for an empty string 
describe('add function',()=>{
test('return 0 for an empty string',()=>{
    expect(add('')).toBe(0);
});

test('return the number itself for single number',()=>{
    expect(add('1')).toBe(1);
});

test('return the sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  test('return the sum of an unknown  number of comma-separated numbers', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });

  test('should allow new lines between numbers and treat them as delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('should throw an error for negative numbers', () => {
    expect(() => add('-1,2,-3')).toThrowError('negatives not allowed: -1,-3');
  });

  test('should allow custom delimiters to be specified', () => {
    expect(add('//;\n1;2')).toBe(3);
  });
})