const account_Id =  144557733;
let account_Email = "divisoni@gamil.com";
var account_Password = "12345";
let accountCity = "Indore";

let account_State;

// account_Id = 2;


/* 
Prefer not to use Var = because of issue in block scope and functional scope
*/ 


console.log(account_Id);
console.log(account_Email);
console.log(account_Password);

console.table([account_Id , account_Email, account_Password, accountCity, account_State]);
