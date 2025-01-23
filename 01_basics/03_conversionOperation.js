let score = "55abs";

console.log(typeof score);

let valueInNumber = Number(score) //Score is converted in number
console.log(typeof valueInNumber);
console.log(valueInNumber);


//"33" = easily convert in 33
//"33abc" = NaN
//true = 1;   false = 0

let isLoggedIn = "Divi";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 = true , 0 = false
//"" = false
//"Divi" = true



let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


//------------------------------------Operators-------------------------
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);


let str1 ="Hello";
let str2 = " Divi";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

/* let num1 , num2 , num3;

num1 = num2 = num3 = 2+2; */ 


//Prefix and postfix operator
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);