// var name:type = value
// basic type
var username = "alice";
username = "bob";
var num = 100;
var isLogin = false;
var isMarried = null;
var is_married = undefined;
// vừa muốn lưu number, vừa lưu được string
// => union type
var age = 20;
age = "2";
// reference type ~ array, object
var numArr = [2, 4, 6];
var numArr2 = [1, 3, 5, 7];
var isLogins = [false, false, true];
numArr.push(8);
var names = ["alice", "bob", "tommy"];
var sp1 = {
    name: "Sony Tivi",
    price: 200,
};
var sp2 = {
    name: "Laptop",
    price: 1000,
};
var sp2 = {
    name: "Iphone",
    price: 1000,
    review: "Good",
};
// function type
function sayHelloo(name) {
    return "Hello, my name is ".concat(name);
}
sayHelloo("Anh");
var getSum = function (num1, num2) {
    return num1 + num2;
};
//void ~ không có giá trị return
var handlePlus = function () {
    console.log("plus");
};
// any type ~ có thể chứa mọi loại dữ liệu
var value = 100;
value = 100;
value = "100";
value = [100, 200];
var salary = "2 cheo";
salary = 2000000;
var todo1 = {
    title: "Chan",
    id: 1,
};
var sp3 = {
    name: "Galaxy Y",
    price: 100,
    rating: 5,
    review: "Not bad",
};
// enum type
var ProductType;
(function (ProductType) {
    ProductType[ProductType["xeBus"] = 0] = "xeBus";
    ProductType[ProductType["xeDap"] = 1] = "xeDap";
})(ProductType || (ProductType = {}));
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
// generic
var printToConsole = function (value) {
    console.log("value", value);
};
printToConsole("alice");
printToConsole(910);
