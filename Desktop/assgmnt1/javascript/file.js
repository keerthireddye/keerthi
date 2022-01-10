// // program to generate fibonacci series up to n terms

// // take input from the user
// // const number = parseInt(prompt('Enter the number of terms: '));
// // let n1 = 0, n2 = 1, res;

// // console.log('Fibonacci Series:');

// // for (let i = 1; i <= number; i++) {
// //     console.log(n1);
// //     res = n1 + n2;
// //     n1 = n2;
// //     n2 = res;
// // }


// // program to check if a number is prime or not

// // take input from the user
// // const number = parseInt(prompt("Enter a positive number: "));
// // let isPrime = true;

// // // check if number is equal to 1
// // if (number === 1) {
// //     console.log("1 is neither prime nor composite number.");
// // }

// // // check if number is greater than 1
// // else if (number > 1) {

// //     // looping through 2 to number-1
// //     for (let i = 2; i < number; i++) {
// //         if (number % i == 0) {
// //             isPrime = false;
// //             break;
// //         }
// //     }

// //     if (isPrime) {
// //         console.log(`${number} is a prime number`);
// //     } else {
// //         console.log(`${number} is a not prime number`);
// //     }
// // }




// // program to find the factorial of a number

// // take input from the user
// const number = parseInt(prompt('Enter a positive integer: '));

// // checking if number is negative
// if (number < 0) {
//     console.log('Error! Factorial for negative number does not exist.');
// }

// // if number is 0
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }

// // if number is positive
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial of ${number} is ${fact}.`);
// }

//armstrong formula
// abcd... = an + bn + cn + dn + ...
// 153 = 1*1*1 + 5*5*5 + 3*3*3
// 1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4
// program to check an Armstrong number of three digits

// let sum = 0;
// const number = prompt('Enter a three-digit positive integer: ');

// // create a temporary variable
// // let temp = number;
// // while (temp > 0) {
// //     // finding the one's digit
// //     let remainder = temp % 10;

// //     sum += remainder * remainder * remainder;

// //     // removing last digit from the number
// //     temp = parseInt(temp / 10); // convert float into integer
// // }
// // // check the condition
// // if (sum == number) {
// //     console.log(`${number} is an Armstrong number`);
// // }
// // else {
// //     console.log(`${number} is not an Armstrong number.`);
// // }




// // program for a simple calculator

// // // take the operator input
// // const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // // take the operand input
// // const number1 = parseFloat(prompt('Enter first number: '));
// // const number2 = parseFloat(prompt('Enter second number: '));

// // let result;

// // // using if...else if... else
// // if (operator == '+') {
// //     result = number1 + number2;
// // }
// // else if (operator == '-') {
// //     result = number1 - number2;
// // }
// // else if (operator == '*') {
// //     result = number1 * number2;
// // }
// // else {
// //     result = number1 / number2;
// // }

// // // display the result
// // console.log(`${number1} ${operator} ${number2} = ${result}`);




// // program for a simple calculator
// let result;

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//          result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//          result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//          result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }




// program to display the sum of natural numbers

// // take input from the user
// const number = parseInt(prompt('Enter a positive integer: '));

// let sum = 0;

// // looping from i = 1 to number
// // in each iteration, i is increased by 1
// for (let i = 1; i <= number; i++) {
//     sum += i;
// }

// console.log('The sum of natural numbers:', sum);


// program to find the HCF or GCD of two integers

// let hcf;
// // take input
// const number1 = prompt('Enter a first positive integer: ');
// const number2 = prompt('Enter a second positive integer: ');

// // looping from 1 to number1 and number2
// for (let i = 1; i <= number1 && i <= number2; i++) {

//     // check if is factor of both integers
//     if( number1 % i == 0 && number2 % i == 0) {
//         hcf = i;
//     }
// }

// // display the hcf
// console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

// program to find the LCM of two integers

// take input
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;

// while loop
// while (true) {
//     if (min % num1 == 0 && min % num2 == 0) {
//         console.log(`The LCM of ${num1} and ${num2} is ${min}`);
//         break;
//     }
//     min++
// }
// program to empty an array

// program to get the URL

const url1 = window.location.href;
const url2 = document.URL;
console.log(url1);
console.log(url2);