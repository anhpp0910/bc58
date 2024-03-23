var count1 = 0;
for (var i = 0; i < 3; i++) {
  console.log("i: ", i);
  count1++;
  for (var j = 0; j < 3; j++) {
    console.log("j: ", j);
    count1++;
  }
}
console.log(count1);
