'use strict';

function tempcheck(c) {
    return (temp >= 30) ? 'Hot' : 'Cold';
}

let temp = +prompt('Temperature');

console.log(tempcheck(temp));