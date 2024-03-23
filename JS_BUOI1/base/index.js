console.log("Hello BC58");

var account = "anhpp@gmail.com";
console.log(account);
console.log("anhpp@gmail.com");

// data type
var username = "AnhPP"; //string
var phone = 0964651421; //number
var isLogIn = true; // boolean: true, false
var isMarried = null; //null //camel
var is_Married = undefined; // undefined //snake
console.log(typeof is_Married);

// update data
username = "ThienNT";
console.log(username, 123, "abc", true, false);

// operator

// tăng giảm 1 đơn vị
var n6 = 10;
var n7 = ++n6 + 8;
console.log(n6);
console.log(n7);

// constant
const name = "Alice";
console.log(name);

var edge1 = 3;
var edge2 = 4;
var edge3 = 0;
edge3 = Math.sqrt(edge1 * edge1 + edge2 * edge2);
console.log(edge3);

var input = 789;
var hangTram = Math.floor(input / 100);
var hangChuc = Math.floor((input % 100) / 10);
var hangDonVi = input % 10;

console.log(hangTram);
console.log(hangChuc);
console.log(hangDonVi);

var tongKySo = hangTram + hangChuc + hangDonVi;
console.log(tongKySo);
