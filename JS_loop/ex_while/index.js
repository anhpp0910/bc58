function submit() {
  var num = Number(document.getElementById("num").value);
  var count = 1;
  var ketQua = "";
  while (num > 1) {
    num = Math.floor(num / 2);
    ketQua += `count: ${count} - num: ${num} <br>`;
    count++;
  }

  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = ketQua;
}
