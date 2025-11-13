
"use strict";


function validusername() {
    return (user.length >= 4) ? "Valid" : "Too short";
}

let user = prompt("Write your username");


alert(validusername(user));