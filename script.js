"use strict";

let arr = [2, -5, 1, -2, 0, -3, 2, -14];

function aboveZero(number){
    return number > 0;
};
let positiveArr = arr.filter(aboveZero);

let result = positiveArr.map(x => x*x);

console.log(result);

let arr2 = [4, 3, 5, 5, 0, 4, 8, 6];

let result2 = arr2.reduce(function(sum, current){
   for( let a = 0; a < arr2.length; a++){
    arr2.length = 4 ;
}
    return sum + current;
}, 0);

console.log(result2);

function summArguments(sum, current){
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i] = sum + current);
    }
    console.log(sum);
}
summArguments(10,10,10,10);