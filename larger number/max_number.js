function maxnumber(numbers) {
    return Math.max(...numbers); 
}

let numbers = [
  +prompt("Write a number"),
  +prompt("Write a second number")
];

alert(maxnumber(numbers));