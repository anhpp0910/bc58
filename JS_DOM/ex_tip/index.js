function tinhTien() {
  var tongTien = document.getElementById("tongTien").value * 1;
  var soNguoi = document.getElementById("soNguoi").value * 1;
  var phanTramTip = document.getElementById("phanTramTip").value * 1;
  var tienTip = (tongTien * phanTramTip) / soNguoi;
  console.log(tienTip);
  document.getElementById("result").innerHTML =
    "Tiền tip " + tienTip + "$ mỗi người";
}
