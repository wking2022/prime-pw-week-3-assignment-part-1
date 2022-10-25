// console.log('***** Function Practice *****')

// ---------- PRACTICE SECTION ----------

// function longDay(){
//   return 'Pimpin aint easy'
// }
// console.log('A Wise Man once told me,"', longDay(), 'young man."');


// function thinkingHard(){
//   console.log( 'blessed to figure out a way to figure it out.' );
//   return 'YouAllReadyKnow';
// }
// console.log(thinkingHard());


// function janeKurt(number, number0, number1){
//   console.log('just an example of what it does', number, number0, 'and', number1 );
//   let bigMoney = number * number0 + number1;
//   return bigMoney;
// }

// console.log('just me giving an example of the answer', janeKurt(2, 243, 9));


// ---------- PRACTICE SECTION END ----------

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName( name ){
  return name;
}

// Remember to call the function to test
console.log("I'm saying", helloName('Stacy'));

// ---------- PRACTICE SECTION----------

function helloName( name ){
  return `Hello ${name}.`;
}
console.log('Testing function of', helloName('Jack'));
console.log('Testing function of', helloName('Jan'));


// ---------- PRACTICE SECTION END ----------


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let total = firstNumber + secondNumber;
  return total;
}
 console.log('The answer is:', addNumbers(2, 3));
 console.log('The answer is:', addNumbers(45, 32));

// 4. Function to multiply three numbers & return the result
function multiplyThree( number5, number6, number7 ){
  // let sum = number5 * number6 * number7;
  return number5 * number6 * number7
}
console.log('The answer is :', multiplyThree(2, 4, 6))
console.log('The answer is :', multiplyThree(4, 2, 553))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return 'true';
  } else {
    return 'false';
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true:', isPositive(3) );
console.log( 'isPositive - should say false:', isPositive(0) );
console.log( 'isPositive - should say false:', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast() {
  let lastItem = ['Susie', 'James', 'Maggie'];
  return lastItem.pop();
}
console.log('Return removed name:', getLast());

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){
  for (i=0; i<array.length; i++){
    if (value === array[i]){
      return 'true';
    }
  }   return 'false';
}

console.log('Display true or false:', find(5, [2, 66, 35, 47, 567, 1]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter( letter, string ){
  for (let i=0; i<string.length; i++){
    if ( letter === string[i] ){
      return 'true';
    } return 'false';
  }   
}

console.log( 'isFirstLetter - should say true or false:', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say true or false:', isFirstLetter('a', 'apple') );

// 9. Function to return the sum of all numbers in an array


// function sumAll( array ) {
//   let sumOfAll = [0, 89, 7, 87];
//   for (let i=0; i<array.length; i++){
//     return sumOfAll;
//   }
// }
// console.log(sumAll([1, 4, 5, 65, 46, 456, 56] + array));


// function sumAll( sum ) {
//   let sum = 0
//   // TODO: loop to add items
//   return sum;

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!