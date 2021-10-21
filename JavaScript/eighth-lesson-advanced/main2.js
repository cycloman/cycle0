"use strict"
let x= prompt ('введите полиндром');
let array =[];
let success = true;

array= [...x];

for (let i=0; i<=array.length/2; i+=1) {

    if (array [i]!==array[array.length-i-1]) {
        success = false;
        alert ('lox');
        break;
    }
}
if (success) {
    alert ('Nice dude');
}

