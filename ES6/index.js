console.log(123);
var fullName = undefined;
// let fullName1 => vùng nhớ chết (temporal dead zone)

// var / const let

const name = "nguyen van a";
let age = 20;

// ex1
console.log(fullName); // undefined
var fullName = "AnhPP"; // global
let fullName1 = "ThienNT";
console.log(fullName1); // global

// cơ chế hoisting: cơ chế đưa phần khai báo biến lên đầu mỗi scope
// var: mặc định gán giá trị = undefined
// let, const: đưa vào vùng nhớ chết (temporal dead zone)
// => ko thể truy cậo tới biến cho đến khi biến được khởi tạo

// Phạm vi hoạt động của biến (scope):
// + global scope: biến được khai báo ngoài cùng của file, không nằm trong 1 function hoặc
// {} đối với let và const
// + function scope: biến được khai báo ở bên trong 1 function, chỉ truy cập đến biến ở trong function đó
// + block scope: chỉ có let và const. Biến được khai báo bên trong 1 {}

{
  let firstName = "Phan";
  {
    let firstName = "Nguyen";
    console.log(firstName);
  }
}

// tham trị (value type): string, number, boolean, undefined

// tham chiếu (reference type): object, array, function
let num = 100;
let num1 = num;

const student = {
  name: "AnhPP",
  age: 24,
};

let student1 = student;
student1.age = 18;
console.log(student);
console.log(student1);

// ARROW FUNCTION

// Ngữ cảnh this (this context)
// Trong 1 method => this trả về đối tượng chứa phương thức đó
// this ở trong 1 func => đối tượng global (window), đối với strict mode => undefined
// arrow function không làm thay đổi ngữ cảnh của this
// Lưu ý: Nếu muốn sử dụng this ở trong method => nên khai báo declaration function
const bae = {
  name: "ThienNT",
  age: 23,
  showBae: function () {
    console.log(this.name + " " + this.age);
    function show() {
      console.log(this);
    }
    show();
    const show1 = () => console.log(this.name);
    show1();
  },
  showInfo1: () => {
    console.log(this);
  },
};

bae.showBae();
bae.showInfo1();

// Bóc tách phần tử (Destructuring)
const button = {
  height: 100,
  width: 200,
  color: "black",
};

const { width: btnwidth, ...rest } = button;
console.log(btnwidth);
console.log(rest);

const products = [
  {
    name: "Samsung",
    price: 100,
  },
  {
    name: "Iphone",
    price: 200,
  },
  {
    name: "Sony",
    price: 150,
  },
];

const [, , a] = products;
console.log(a);

// Spread Operator
const smartphone = {
  name: "Samsung",
  price: 1000,
  attributes: {
    weight: 200,
    system: "android",
  },
};

// copy nông (shallow copy)
// const smartphone1 = { ...smartphone, color: "black", name: "Iphone" };
// smartphone1.price = 2000;

// copy sâu (deep copy)
// C1: JSON
// const smartphone1 = JSON.parse(JSON.stringify(smartphone));
// smartphone1.name = "Iphone";
// smartphone1.attributes.system = "IOS";
// console.log("smartphone", smartphone);
// console.log("smartphone1", smartphone1);

// C2:
const smartphone1 = structuredClone(smartphone);
smartphone1.name = "Iphone";
smartphone1.price = 2000;
smartphone1.attributes.system = "IOS";
console.log("smartphone", smartphone);
console.log("smartphone1", smartphone1);

const colors = ["pink", "red", "black"];
const colors1 = [...colors, "white"];
colors1[0] = "yellow";
console.log(colors);
console.log(colors1);

// Default parameter
const logger = (mess = "default!!!") => {
  console.log("Hello thầy");
  console.log(mess);
};

logger("9r rồi thầy!");
logger();

// REST PARAMETER
const tinhTong2So = (num1, num2) => num1 + num2;

const tinhTong = (...num) =>
  num.reduce((sum, currentNum) => sum + currentNum, 0);

const tong2So = tinhTong2So(10, 20);
console.log("tong2So: ", tong2So);

// TEMPLATE STRING
const tong12345 = `Tổng là ${tinhTong(1, 2, 3, 4, 5)}`;
console.log("tong12345:", tong12345);

// OBJECT LITERAL
const fullName123 = "AnhPP";
const address = "HHT";
const fatherName = "ThaiPQ";

const son = {
  fullName123,
  address,
  fatherName,
};

console.log("son:", son);

// for in, for of
// for in: thường sử dụng để duyệt object

const car = {
  color: "black",
  weight: 1000,
  brand: "Toyota",
};

for (let key in car) {
  console.log(key, car[key]);
}

// Trả về 1 arr chứa tất cả các key đang có của object
const arrKey = Object.keys(car);
arrKey.forEach((key) => console.log(key, car[key]));

// for of: thường sử dụng để duyệt mảng
const cars = ["BMW", "Toyota", "Porches", "Mercedes"];

for (let value of cars) {
  console.log(value);
}

// Những phương thức
const productList = [
  {
    id: 1,
    name: "Samsung",
    price: 12000,
  },
  {
    id: 2,
    name: "Sony",
    price: 1500,
  },
  {
    id: 3,
    name: "Iphone",
    price: 2000,
  },
];

// x2 price tất cả phần tử trong productList
// map
// callback
const newProductList = productList.map((product) => ({
  ...product,
  price: product.price * 2,
}));

console.log(newProductList);

// filter
// Xoá phần tử id = 2
const newProductList2 = productList.filter((product) => product.id !== 2);
console.log("newProductList2: ", newProductList2);

// find
// Log ra giá trị của id = 3
const newProductList3 = productList.find((product) => product.id === 3);
console.log("newProductList3: ", newProductList3);

// findIndex
const targetIndex = productList.findIndex((product) => product.id === 3);
console.log("targetIndex: ", targetIndex);

const sortProductList = productList.sort((a, b) => b.price - a.price);
console.log("sortProductList: ", sortProductList);

// forEach: k thể sử dụng break
productList.forEach((value, index) => console.log(value));

// IMPORT vs EXPORT

import { tinhGiaTriTB, PATH as path } from "./utils.js";
import thisyear from "./utils.js";
console.log(tinhGiaTriTB(5, 7));
console.log(path);
console.log(thisyear);

// CLASS => lớp đối tượng

function Student(name, age) {
  this.name = name;
  this.age = age;
}

const student2 = new Student("AnhPP", 24);
console.log(student2);

class Smartphone {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
}

const smartphone2 = new Smartphone("Sony", "pink");
console.log(smartphone2);
