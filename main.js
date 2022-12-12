/* Book 2: #4 Build the Calculator

write the following functions to perform the other operations. 
Use these exact names
    subtract - take 2 parameters
    divide - take 2 parameters
    multiply - take 2 paraments
    square - take 1 parameter

*invoke the functions & store the return value in a variable
* then console.log() to verify the functions work.
*/

//1. SUBTRACT
//  define variable subtract to = input/info
const subtract = (firstNumber, secondNumber) => {
    // define that minus = to 1st # - 2nd
    const minus = firstNumber - secondNumber
    // gives the answer, returns variable minus (not subtract)
    return minus
}
// invoke/run the function to get what you actually need!
let result = subtract(10,7)
// prints the result
console.log(result)

// 2. DIVIDE: 
// define variable divide to = input/info
const divide = (firstNumber, secondNumber) => {
    // define that minus = to 1st # / 2nd
    const split = firstNumber / secondNumber
    // gives the answer, returns variable split (not divide)
    return split
}
// invoke/run the function to get what you actually need!
let result2 = divide(60,2.5)
// prints the result
console.log(result2)

// 3. MULTIPLY:
// define variable multiply to = input/info
const multiply = (firstNumber, secondNumber) => {
    // define that minus = to 1st # / 2nd
    const times = firstNumber * secondNumber
    // gives the answer, returns variable split (not divide)
    return times
}
// invoke/run the function to get what you actually need!
let result3 = multiply(.25,4)
// prints the result
console.log(result3)

// 4. Square:
// define variable square to = input/info
const square = (firstNumber) => {
    // define that minus = to 1st # / 2nd
    const double = firstNumber * firstNumber
    // gives the answer, returns variable split (not divide)
    return double
}
// invoke/run the function to get what you actually need!
let result4= square(30)
// prints the result
console.log(result4)


/*Solve This
    A quarter of the animals on a farm have four legs. 
    The remaining three quarters of the animals have two legs.
     If there are 60 legs overall, how many animals are there 
     on the farm?

     algebraic equation:
     
     x= animals

     (.25x + 4) + (.75x + 2) = 60
     -->   (1x) + (1.5x) = 60
     -->    2.5x = 60
      -->   x = 24

     */
