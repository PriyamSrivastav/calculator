function add(numbers) {
    let delimiters = [',', '\n'];
    let customDelimiter = '';
    let negatives = [];
  
    if (numbers.startsWith('//')) {
      customDelimiter = numbers.substring(2, numbers.indexOf('\n'));
      if (customDelimiter.includes('[') && customDelimiter.includes(']')) {
        delimiters = customDelimiter
          .split('[')
          .filter((delimiter) => delimiter !== '')
          .map((delimiter) => delimiter.substring(0, delimiter.indexOf(']')));
      } else {
        delimiters = [customDelimiter];
      }
      numbers = numbers.substring(numbers.indexOf('\n') + 1);
    }
  
    let sum = numbers
      .split(new RegExp('[' + delimiters.join('') + ']', 'g'))
      .reduce((total, number) => {
        number = parseInt(number);
        if (number < 0) {
          negatives.push(number);
        } else if (number <= 1000) {
          total += number;
        }
        return total;
      }, 0);
  
    if (negatives.length > 0) {
      throw new Error('Negatives not allowed: ' + negatives.join(', '));
    }
  
    return sum;
  }
  
  
  
  
  
  module.exports = add;