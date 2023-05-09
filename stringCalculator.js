function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    // if (!numbers.includes(",")) {
    //   return parseInt(numbers);
    // }

    // const [num1, num2] = numbers.split(",");
    // return parseInt(num1) + parseInt(num2);



    //Case 3:- test case for an unknown numbers and make it pass

    const nums = numbers.split(",").map(num => parseInt(num));
    return nums.reduce((acc, curr) => acc + curr);
  }
module.exports = add;