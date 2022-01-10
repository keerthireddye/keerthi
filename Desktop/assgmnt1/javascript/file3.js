//hello
// document.write('hello world');


// console.log('hello world');


// alert('hello world');


//add two numbers
// const num1=10;
// const num2=20;
// const sum=num1 + num2;
// console.log('the sum is' + num1 +'and'+ num2 +' is: '+sum);




// //add two number by user
// const num1=parseInt(prompt('enter the first number'));
// const num2=parseInt(prompt('enter the second number'));
// const sum=num1+num2;
// console.log(`the sum of ${num1} and ${num2} is ${sum}`);



// take the input from the user
// const number = prompt('Enter the number: ');

// const result = Math.sqrt(number);
// console.log(`The square root of ${number} is ${result}`);



//area of triangle
// const baseValue = prompt('Enter the base of a triangle: ');
// const heightValue = prompt('Enter the height of a triangle: ');
// const areaValue = (baseValue * heightValue) / 2;

// console.log(
//   `The area of the triangle is ${areaValue}`
// );



//area of a triangle
// JavaScript program to find the area of a triangle

// const side1 = parseInt(prompt('Enter side1: '));
// const side2 = parseInt(prompt('Enter side2: '));
// const side3 = parseInt(prompt('Enter side3: '));

// // calculate the semi-perimeter
// const s = (side1 + side2 + side3) / 2;

// //calculate the area
// const areaValue = Math.sqrt(
//   s * (s - side1) * (s - side2) * (s - side3)
// );

// console.log(
//   `The area of the triangle is ${areaValue}`
// );


// /swap the two numbers
// / //take input from the users swap the two numbers
// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');

// //create a temporary variable
// let temp;

// //swap variables
// temp = a;
// a = b;
// b = temp;

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

//odd and even Number
// const number=prompt("enter the number:");
// if ( number % 2 == 0){
//     console.log("the number is even");
// }
// else{
//     console.log("the number is add");
// }

//multiplication table
// program to generate a multiplication table

// take input from the user
// const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }

//removing duplicate array

// program to remove duplicate value from an array

// function getUnique(arr){

//     // removing duplicate
//     let uniqueArr = [...new Set(arr)];

//     console.log(uniqueArr);
// }

// const array = [1, 2, 3, 2, 3];

// calling the function
// getUnique(array);


// current Date
//  let currentDate= new Date();
// console.log(currentDate);

// program to write to console

// passing number 
// console.log(8);

// // passing string
// console.log('hello');

// // passing variable
// const x = 'hello';
// console.log(x);

// // passing function
// function sayName() {
//     return 'Hello John';
// }
// console.log(sayName());

// // passing string and a variable
// const name = 'John';
// console.log('Hello ' + name);

// // passing object
// let obj = {
//     name: 'John',
//     age: 28
// }
// console.log(obj);
// program to trim a string

const string = '      Hello World       ';

const result = string.split(' ').join('');

console.log(result);