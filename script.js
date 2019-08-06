"use strict";

let arr = [2, -5, 1, -2, 0, -3, 2, -14];

function aboveZero(number){
    return number >= 0;
};
let positiveArr = arr.filter(aboveZero);

let result = positiveArr.map(function(x){
    return Math.round(Math.sqrt(x) * 100) / 100;
});

console.log(result);

let arr2 = [4, 3, 5, 5, 0, 4, 8, 6];

let result2 = arr2.reduce(function(sum, current){
   if(current === 0){
       arr2.splice(0);
}
    return sum + current;
}, 0)
    

console.log(result2);

function summArguments(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
}
summArguments(10,10);
summArguments(10);


