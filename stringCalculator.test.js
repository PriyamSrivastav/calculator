const add = require('./stringCalculator');

// 1. Case:   Return Zero for an empty string 
describe('add', () => {
    test('returns 0 for empty string', () => {
        expect(add('')).toBe(0);
      });
      
      test('returns the number for single number input', () => {
        expect(add('5')).toBe(5);
      });
      
      test('returns the sum for two comma-separated numbers', () => {
        expect(add('5,7')).toBe(12);
      });
      
      test('returns the sum for three comma-separated numbers', () => {
        expect(add('1,2,3')).toBe(6);
      });
      
      test('supports newlines as an alternative delimiter', () => {
        expect(add('1\n2,3')).toBe(6);
      });
      
      test('throws an error for negative numbers', () => {
        expect(() => add('1,-2,3')).toThrow('Negatives not allowed: -2');
      });
      
      test('ignores numbers greater than 1000', () => {
        expect(add('2,1001')).toBe(2);
      });
      
      test('supports different delimiters', () => {
        expect(add('//;\n1;2')).toBe(3);
      });
      
  });
  