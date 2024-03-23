// var count = 0;
// while (count < 3) {
//   count++;
//   console.log("Hello world", count);
// }

var count = 0;
do {
  count++;
  console.log("Hello world", count);
} while (count > 3);

// Làm trước rồi tính sau

var input = 20;
var count = 0;
var sum = 0;
do {
  count++;
  sum += count;
} while (count < input);
console.log(sum);
