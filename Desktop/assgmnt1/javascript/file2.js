// program to find the ASCII value of a character

// take input from the user
// const string = prompt('Enter a character: ');

// // convert into ASCII value
// const result = string.charCodeAt(0);

// console.log(`The ASCII value is: ${result}`);


// program to check if the string is palindrome or not

// function checkPalindrome(str) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);


// program to sort words in alphabetical order

// take input
// const string = prompt('Enter a sentence: ');

// // converting to an array
// const words = string.split(' ');

// // sort the array elements
// words.sort();

// // display the sorted words
// console.log('The sorted words are:');

// for (const element of words) {
//   console.log(element);
// }


// program to replace a character of a string

// const string = 'Mr Red has a red house and a red car';

// // replace the characters
// const newText = string.replace('red', 'blue');

// // display the result
// console.log(newText);


//reverse string
// function reverseString(str){
//     let newString ="";
//     for(let i=str.length-1;i>=0;i--){
//     newString +=str[i];
// }
// return newString;
// }
//     const string=prompt("enter a string: ");
//     const result=reverseString(string);
//     console.log(result);


//how to create objects
// const person={
//     name:'akhitha',
//     age:25,
//     hobbies:['playing','coding','games'],
//     greet:function(){
//         console.log('hello world');
//     },
//     score:{
//         math:40,
//         science:'90'
//     }
// }
//     console.log(typeof person);
//     console.log(person. name);
//     console.log(person.hobbies[1]);
//     person.greet();
//     console.log(person.score.math);



/// program to check the number of occurrence of a character

// function countString(str, letter) {
//     let count = 0;

//     // looping through the items
//     for (let i = 0; i < str.length; i++) {

//         // check if the character is at that position
//         if (str.charAt(i) == letter) {
//             count += 1;
//         }
//     }
//     return count;
// }

// take input from the user
// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
// const result = countString(string, letterToCheck);

// displaying the result
// console.log(result);


// program to convert first letter of a string to uppercase
// function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    // const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    // return capitalized;
// }

// take input
// const string = prompt('Enter a string: ');

// const result = capitalizeFirstLetter(string);

// console.log(result);


// program to count the number of vowels in a string

// function countVowel(str) { 

    // find the count of vowels
    // const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    // return count;
// }

// take input
// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);


// program to remove a property from an object

// creating an object
// const student = { 
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
//     greet: function() {
//         console.log('Hello everyone.');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// };

// // deleting a property from an object
// delete student.greet;
// delete student['score'];

// console.log(student);


// // program to convert an object to a string

// const person = {
//     name: 'Jack',
//     age: 27
// }

// const result =  JSON.stringify(person);

// console.log(result);
// console.log(typeof result);



// program to display the date
const date = new Date();
console.log(date);//Sun Jan 09 2022 18:59:59 GMT+0530 (India Standard Time)
const n = date.toDateString();
console.log(n); // Wed Aug 26 2020
const time = date.toLocaleTimeString();
console.log(time);//6:59:59 PM



// program to insert an item at a specific index into an array

function insertElement() {
    let array = [1, 2, 3, 4, 5];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;
  
    array.splice(index, 0, element);
    console.log(array);
}

insertElement()