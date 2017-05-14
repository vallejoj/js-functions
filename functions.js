/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
 function numberToString(num){
  return num.toString();
 }

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase(num) {
    return num+1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(num) {
  return num-1;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x,y) {
  var sum= x+y;
  return sum;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x, y) {
  var sum= x-y;
  return sum
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x,y) {
  var sum= x*y;
  return sum;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x,y) {
  var sum= x/y;
  return sum
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x) {
  var sum=x*x;
  return sum;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(x,y) {
  var sum= x+y;
console.log(x+y);
  return sum;
}
console.log(calculate(4,7));

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(x,y) {
  if (x>y) {
    return true;
  }else{
    return false
  }
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(x,y) {
  if (x<y) {
    return true;
  }else{
    return false}
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(x,y) {
  if (x===y) {
    return true;
  }else{
    return false;
  }
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(x,y) {
   var sum= Math.min(x,y);
   return sum;
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
 function maximum(x,y) {
   var sum=Math.max(x,y);
   return sum
 }


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(x) {

  if (x%2===0) {
    return true;
  }else{
    return false;
  }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(x) {
  if (x%1===0) {
    return true;
  }else{
    return false;
  }
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(num1,num2) {
  var grade= (num1/num2)*100;
  if (grade>=90) {
    return 'A';
  }else if (grade>=80) {
    return 'B';
  }else if (grade>=70) {
    return 'C';
  }else if (grade>=60) {
    return 'D';
  }else{
    return 'F';
  }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
function incrementReviews(obj) {
  if (obj.hasOwnProperty('reviews')) {
    obj.reviews=obj.reviews+1;
  }else{
     obj.reviews=1;
  }
  return obj;
}
fun

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(str1,str2) {
  var word= str1.concat(' ',str2);
return word
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
 function createCircle(radius) {

   var area= Math.PI*radius*radius;

   var circumference=2*Math.PI*radius;
   var circle= {
    circumference:circumference,
    area:area};
   return circle;
 }

