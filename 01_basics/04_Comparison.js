console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* The reason is that an equality check == and camparisons >, <, >=, <= work differently.
Comparisons convert null to a number , treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false. */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//Strict check = "==="  It check value and also strictly check the data type

console.log("2" === 2);

