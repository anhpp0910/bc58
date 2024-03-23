// var name:type = value

// basic type
var username: string = "alice";
username = "bob";

var num: number = 100;
var isLogin: boolean = false;
var isMarried = null;
var is_married = undefined;

// vừa muốn lưu number, vừa lưu được string
// => union type

var age: number | string = 20;
age = "2";

// reference type ~ array, object
var numArr: number[] = [2, 4, 6];
var numArr2: Array<number> = [1, 3, 5, 7];
var isLogins: boolean[] = [false, false, true];

numArr.push(8);
var names: Array<string> = ["alice", "bob", "tommy"];

// interface ~ mô tả object

interface Product {
  name: string;
  price: number;
  review?: string;
}
var sp1: Product = {
  name: "Sony Tivi",
  price: 200,
};

var sp2: Product = {
  name: "Laptop",
  price: 1000,
};

var sp2: Product = {
  name: "Iphone",
  price: 1000,
  review: "Good",
};

// function type
function sayHelloo(name: string): string {
  return `Hello, my name is ${name}`;
}

sayHelloo("Anh");
let getSum = (num1: number, num2: number): number => {
  return num1 + num2;
};

//void ~ không có giá trị return
let handlePlus = (): void => {
  console.log("plus");
};

// any type ~ có thể chứa mọi loại dữ liệu
var value: any = 100;
value = 100;
value = "100";
value = [100, 200];

// type alias
type StringOrNumber = number | string;

var salary: StringOrNumber = "2 cheo";

salary = 2000000;

type ToDoObject = {
  title: string;
  id: number;
};

var todo1: ToDoObject = {
  title: "Chan",
  id: 1,
};

// interface ~ có thể update

interface Product {
  rating?: number;
}

var sp3: Product = {
  name: "Galaxy Y",
  price: 100,
  rating: 5,
  review: "Not bad",
};

// enum type
enum ProductType {
  xeBus = 0,
  xeDap = 1,
}

enum PrintMedia {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book,
}

// generic
let printToConsole = <T>(value: T) => {
  console.log("value", value);
};

printToConsole<string>("alice");

printToConsole<number>(910);
