document.getElementById("btnTinhTien").onclick = function () {
  var soLuong = Number(document.getElementById("soLuong").value);
  var donGia = Number(document.getElementById("donGia").value);
  if (soLuong > 0 && soLuong < 50) {
    var thanhTien = donGia * soLuong;
  } else if (soLuong >= 50 && soLuong <= 100) {
    thanhTien = 49 * donGia + (soLuong - 49) * donGia * 0.92;
  } else if (soLuong > 100) {
    thanhTien = 100 * donGia + (soLuong - 100) * donGia * 0.88;
  } else {
    document.getElementById("result").innerHTML = "Số lượng không hợp lệ !!!";
  }
  document.getElementById("result").innerHTML =
    "Tiền hàng là: " + thanhTien.toLocaleString() + " VND";
};
