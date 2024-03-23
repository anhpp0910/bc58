// BT1
function inChanLe() {
  var stringChan = "";
  var stringLe = "";
  for (var i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      stringChan += `${i} `;
    } else {
      stringLe += `${i} `;
    }
  }
  console.log(stringChan);
  console.log(stringLe);
  document.getElementById("result").style.display = "block";
  document.getElementById(
    "result"
  ).innerHTML = `Số chẵn: ${stringChan} <br><br> Số lẻ: ${stringLe}`;
}

// BT2
function tinhTong() {
  var num = Number(document.getElementById("i2").value);
  var sum = 0;
  for (var i = 2; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  document.getElementById("result2").style.display = "block";
  document.getElementById("result2").innerHTML = `Tổng các số chẵn: ${sum}`;
}

//
var count = 0;
for (count; count <= 10; count++) {
  console.log("Do nothing");
}
console.log(count);
