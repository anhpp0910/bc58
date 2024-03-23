// clear ô input mỗi khi click Thêm số
function clearField() {
  document.getElementById("number").value = "";
}

var numberArr = [];
function themSo() {
  var number = Number(document.getElementById("number").value);
  numberArr.push(number);
  // tính tổng số chẵn
  var sumChan = 0;
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] % 2 === 0) {
      sumChan += numberArr[i];
    }
  }
  // đếm số âm và tính tổng số âm
  var countAm = 0;
  var sumAm = 0;
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] < 0) {
      countAm++;
      sumAm += numberArr[i];
    }
  }
  var message = `Chuỗi số: ${numberArr} <br><br> Tổng các số chẵn: ${sumChan} <br><br> Số số âm: ${countAm}<br><br> Tổng các số âm: ${sumAm}`;
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = message;
  clearField();
}
