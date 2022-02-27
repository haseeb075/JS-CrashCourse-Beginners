// console.log("hello from main.js");

// variables

// let age= 25;
// age++
// console.log(age);

// const salary= 125000;
// salary++ // const value cant be reintiallized
// console.log(salary);

// data types with 
// 7 primitive
//string, number, boolean, undefined, null, bigint, symbol
// & 1 non-primitive types
// Objects

// Primitive Data types
// strings can have double, single, backticks quotes 
// const name= 'haseeb';
// const language = 'javascript';
// const channel = `codeevolution`;

// number having integers and floating point no
// const total = 0;
// const PI = 3.14;

// booleans having true and false
// const isPrimaryNumber = true;
// const isNewUser = false;

// undefined => declared but not defined which will give undefined
// let thisNumber;
// or let thisNumber = undefined
// console.log(thisNumber);

// define value to undefined explecitly
// let exam = undefined;

// If you dont know the value, assign a null to unknown value
// let result = null;
// console.log(result)

// For BigInt => For numbers larger than number
// For Symbol => For value that is unique & unchangeable

// Non-Primitive Data type
// Object are the properties having key value pairs

// const person = {
//     firstName: 'Bruce',
//     lastName: "Lee",
//     age: 30,
// }
// console.log(person.firstName);

// const oddNumbers = [1,2,3,4,5,6]
// console.log(oddNumbers[1]);

// let a = 10;
// a = haseeb;
// a = iqbal;
// console.log(a); //Outputs last assigned value

// Operators
// let x= 10;
// let y= 5;

// console.log(x%y);
// console.log(++x);
// console.log(--y);
// console.log(y <= x);

// const isValidNumber =  x > 8 && 8> y
// console.log(isValidNumber);


// const isValidNumberOR =  x > 20 || 8> y
// console.log(isValidNumberOR);

// const isValid = false;
// console.log(!isValid);

// console.log('haseeb' + 'iqbal');

// const isEven = 10%2 === 0 ? "Number is even" : "Number is false"
// console.log(isEven);

// type conversion
// implicit conversion also known as type coercion => js autmatically convert types in code
// explicit conversion => you have to convert types in code

// implicit conversion examples
// console.log(true+'3');
// console.log('bruce' - 'lee');
// console.log('5' - false);
// console.log(5 + undefined);

// console.log('5' - null); // null will be treated as 0
// if u use undefined with number, boolean or null => result is NAN 

// explicit conversion examples
// console.log(Number('5'));
// console.log(Number(false));
// console.log(Number(''));
// console.log(Number(undefined));
// console.log(parseInt('5'));
// console.log(parseFloat('3.14'));
// console.log(String(500));
// console.log(String(null));
// console.log(String(undefined));
// console.log(String((500).toString()));
// console.log(Boolean(10)); // this will return true Everything else will return false except null undefined 0 '' NaN


// Equality 2 types
//== (allow coercion)
// === (doesnt allow coercion)
// 10 == '10' // true while 10 === '10' //false
// 0 == ''// true while 0 === '' false
// false == '' // true  while null === '' //false
// null == undefined // true while null === undefined // false

//Conditional Statements => if else else if switch

// const num = 0;
// if (num > 0){
//     console.log("Number is positive");
// }
// else if (num < 0){
// console.log("Number is negative");
// }
// else 
// console.log("Number is 0");

// Conditional Statments
// const color = 'red';
// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break
// case 'blue':
//         console.log('Color is red');
//         break
// case 'green':
//         console.log('Color is red');
//         break
//         default:
//         console.log('Not a valid color');
// }  

// Loops
// let i = 1;
// while(i <= 5){
//     console.log('iteration will be', i);
//     i++
// }

// For of loop=> for looping on collection of data like an array
// const numArray = [1,2,3,4,5]
// for(const num of numArray){
//     console.log('iteration will be', num);
// }

// Functions are the block of code designed to run a particular task
// Functions get reusable as they can be defined once and can be called with different values resulting different results
// Functions help to divide a complex problem into smaller chunks and makes your program easier

// function greet(username){ //functions parameters
//     console.log('Good Morning ' + username);
// }

//function args
// greet('Haseeb')
// greet('Ali')
// greet('tabish')

// const add = (a,b) => a+b

// const sum= add(25,15)
// console.log(sum);

// scope => scope basically determines accesibility and visibility of variables
// block , function, global
// block => introduced during let and const keyword
// It ensures variables accessed inside curly braces will not be accessed outside the block
// if(true){
//     // let and const
//     const myName = 'haseeb'
//     console.log(myName);
// }
// function => variables declared inside the function cant be accessed outside the function

// function testFn(){
//     const myName = 'Batman'
//     console.log(myName);
// }
// testFn()
// const adddition = (a, b) => a+b;
// const sum = adddition(5,9)
// console.log(sum);

// both examples are good enough to understand that their variable names are same but are in different scopes

// global scope => scope outside any block or a function
// globally scoped variables donot overide block scope or function scope variables

// const myNum = 100;
// const myName = 'anewname'


// if(true){
//     const myName = 'Batman'
//     console.log(myName)
//     console.log(myNum)

// }

// function newFunc(){
//     const myName = 'Superman'
//     console.log(myName)
//     console.log(myNum)

// }
// newFunc()

// Functions from Purple.com

// We are using for different parameters

// Example 1
// function sayHi(firstName, age){
// console.log("My name is" + "" + firstName + "& your age is: " + age);
// }
// const haseeb = "haseeb will go to the top "
// sayHi(haseeb , 27)

// Example 2
// function numberDouble(num){
//   return num * 2
// }
// console.log(numberDouble(5))

// example 3
// function numberDoubler(num){
//     const doublevalue = num*2;
//     return doublevalue
// }
// const newvalue = numberDoubler(8)
// console.log(newvalue);

// example 4
// const value1 = numberDoubler(7);
// const value2 = numberDoubler(8);

// function numberAdder(num1 , num2){
//     return num1 + num2;
// }
// console.log(numberAdder(value1 , value2))

// example 5 of impure functions or called as hoisted functions

// this function will work
// const myName = "chris";

// function sayHi(myName){
//     if (!myName){
//         var myName = "bob";
//     }
//     console.log("Hi" + " " + myName);
// }

// sayHi("Her0")

// This function will not work
// sayHi("Her0")
// const sayHi = function(myName){
//     if (!myName){
//         var myName = "bob";
//     }
//     console.log("Hi" + " " + myName);
// }

// example 6
// const squardNumber = function(num){
//     return num * num
// }
// const numberAdder = function(num1, num2){
//     return num1 + num2
// }

// console.log( numberAdder(squardNumber(4) , 10 ));

// Example 7
// let myString = "i am a stringiii"

// function addHello(stringi){
//  return "Hello" + stringi
// }
// console.log(addHello(myString));


// Example 8 Functions with objects
// const myInfo = {name: "Chris" , age:30}
// function ageChangeTo100(newage){
//     myInfo.age = 100
// }
// console.log(myInfo);
// ageChangeTo100()
// console.log(myInfo);

// well const shouldnt have to changes the value but it does. The reason is
// Answer: You can't create a const array because arrays are objects and can only be created at runtime and const entities are resolved at compile time.
// Answer: If you want to make an array constant, you can precede its type with the word const. When you do so, the array name is constant, and the elements inside the array are also constant. Thus you cannot have a constant array with nonconstant elements, nor can you have a nonconstant array with constant elements.

// Example 9 with arrays
// const myNumbers = [1,2,3,4,5,6]

// function addNumber(myNumbers){
//     myNumbers.push(6)
// }
// addNumber(myNumbers)
// console.log(myNumbers);

// Nested Functions => functions can be nested inside another functions thats why they are called closures
// closures example 1
function squareAndMultilpy(num1, num2) {
    // let testlet = "I am a test";
    // private function because I cannot access this function outside of this parent function & gives me error squarer is not defined
    function squarer(x) {
        // var testlet = "I am a test";

        // console.log(testlet);
        return x * x;
    }
    // console.log(testlet);
    function multiplierby10(y) {
        return y * 10;
    }
    return squarer(num1) * multiplierby10(num2);
}

console.log(squareAndMultilpy(6, 85));

// closures example 2
// function personFormatter(firstName, lastName, age){
//     function formatNames(arg1,arg2){
//         return arg1 + "" + arg2;
//     }
//     const formattednames = formatNames(firstName, lastName);
//     return formattednames;
// }

// console.log(personFormatter("Chris", "Jones", 20))

// closures example 3
// function personFormatter(firstName, lastName, age){
//     function formatNames(arg1,arg2){
//         return arg1 + "" + arg2;
//     }

//     function dataFormatter(fullName, num){
//         const formattedData = {
//             name: fullName,
//             age: num
//         }
//         return formattedData
//     }

//     const formattednames = formatNames(firstName, lastName);
//     return dataFormatter(formattednames, age);
// }
// console.log(personFormatter("Chris", "Jones", 20))

// closures example 4
// concatenates strings into one string
// function formatNames(arg1, arg2) {
//     return arg1 + "" + arg2;
// }

// formates data into an object, with name and age
// function dataFormatter(fullName, num) {
//     const formattedData = {
//         name: fullName,
//         age: num
//     }
//     return formattedData
// }

// formnats data into object ny invoking other functions
// function personFormatter(firstName, lastName, age) {
//     const formattednames = formatNames(firstName, lastName);
//     const formattedData = dataFormatter(formattednames, age);
//     return formattedData
// }
// console.log(personFormatter("Chris", "Jones", 20))



