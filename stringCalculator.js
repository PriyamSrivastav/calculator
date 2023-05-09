function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    let delimiter = /[,\n]/;
    let negatives = [];
  
    if (numbers.startsWith("//")) {
      const delimiterIndex = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterIndex));
      numbers = numbers.substring(delimiterIndex + 1);
    }
  
    const nums = numbers.split(delimiter).map((num) => parseInt(num.trim()));
  
    let sum = 0;
    for (let num of nums) {
      if (num < 0) {
        negatives.push(num);
      } else if (num > 1000) {
        continue;
      }
      sum += num;
    }
  
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }
  
    return sum;
  }
module.exports = add;