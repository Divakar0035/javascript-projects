const score = 400
/*console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))
console.log(balance.toPrecision(2)) */

// **************************************** MATHS ************************************************************

/*console.log(Math)
console.log(Math.round(4.3))
console.log(Math.abs(-4))
console.log(Math.ceil(4.3))
console.log(Math.abs(-8))
console.log(Math.floor(4.7))
console.log(Math.min(3,0,9,5,45));*/
console.log(Math.random()) // this value always comes between 0 and 1
// to avoid the fact that value always comes between 0 and 1 we can do 
console.log((Math.random() * 10) + 1 );
// if we want the values to lie between a range of two numbers a and b 
// METHOD :-
const min = 10;
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min)
