Here is the Following Steps need to execute the function of calculator

1. Go with  
:-->            npm install
2. 
test cases are
The sum of a string of numbers entered using the add function is returned.
 Commas, newlines, or a custom delimiter provided at the start of the input string can be used to separate the numbers from one another,negative values. 
 Here's an illustration:

 const add = require

:-->  sum = add('1,2,3'); // gives a result of 6.
:-->  sum =  add('//;\n1;2') //supports different delimiters
:-->  sum = add('') // Return empty 
:-->  sum = add('5') // return number
:-->  sum = add('1\n2,3') // newlines as an alternative delimite
:-->  sum = add('1,-2,3') // negative number not allowed
:-->  sum = add('2,1001') // ignore greator number 1000

Custom delimiters can also be handled via the add function. Add a line at the start of the input string with the format //delimiter>n to define a custom delimiter





//for runing the test please use console

:-->  npm test