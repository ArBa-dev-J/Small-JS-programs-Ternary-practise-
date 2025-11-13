"use strict";


function divisibleby5(){
    return (number / 5) 
    == (Math.floor(number / 5)) ? "Divisible from 5" : "Not divisble from 5";
}

let number = +prompt("Number");

alert(divisibleby5(number));
