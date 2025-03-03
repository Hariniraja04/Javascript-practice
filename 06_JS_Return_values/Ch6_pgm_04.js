// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var num1 = 50;
var num2 = 23;
var sum = add(num1,num2);
console.log(' The sum of ' + num1 + ' and ' + num2 + ' is ' + sum);

var sum1 = add(add(23,14),90);
console.log(sum1);

var addThreeNumbers = function (number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
};

var sum = addThreeNumbers(10, 20, 30);
console.log(sum);


/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */