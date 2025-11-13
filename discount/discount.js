function discountEligibility(price){
return (price > 100)? "Discount applied" : "No discount";
}

let price = +prompt("Write a price to check if discount is applied");

alert(discountEligibility(price));