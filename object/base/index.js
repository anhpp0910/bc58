// array: lưu danh sách (danh sách điểm), truy xuất => array[index]

// object: mô tả nhiều thông tin về 1 đối tượng, truy xuất => object.key

// 1 bạn gồm 5 thông tin => cần 5 biến
// 10 bạn => 50 biến
// dùng object => 10 biến

// key: value,
var cat1 = {
  name: "gon",
  age: 4,
  sayHello() {
    console.log("meomeo, tao là:", this.name);
  },
};

var cat2 = {
  name: "gao",
  age: 6,
};

console.log(cat1.sayHello(cat1.name));

var dog1 = {
  name: "Lucy",
  score: 5,
};

var dog2 = dog1;
dog2.score = 10;
dog1.score = 15;

console.log("dog1", dog1);
console.log("dog2", dog2);

// lớp đối tượng Cat
function Cat(id, name) {
  this.id = id;
  this.name = name;
}

// tạo cat3 từ class Cat
var cat3 = new Cat(1, "meo");
var cat4 = new Cat(2, "miu");
console.log(cat3);
console.log(cat4);
