/**
object: 7 key ~ 5 property 2 method
1. lấy thông tin từ form ( dom tới input)
2. tạo object tương ứng
3. sử dụng object để show lên layout
 */

function showInfo() {
  //1. lấy thông tin từ form
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var loai = document.getElementById("loaiSV").value;
  var toan = document.getElementById("txtDiemToan").value * 1;
  var van = document.getElementById("txtDiemVan").value * 1;
  //2. tạo oject
  var sv = {
    ma: ma,
    ten: ten,
    loai: loai,
    toan: toan,
    van: van,
    tinhDTB: function () {
      var dtb = (this.toan + this.van) / 2;
      return dtb;
    },
    xepLoai: function () {
      var dtb = this.tinhDTB();
      if (dtb >= 5) {
        return "Đậu";
      } else {
        return "Rớt";
      }
    },
  };
  //3. show thong tin
  document.getElementById("spanTenSV").innerText = sv.ten;
  document.getElementById("spanMaSV").innerText = sv.ma;
  document.getElementById("spanLoaiSV").innerText = sv.loai;
  document.getElementById("spanDTB").innerText = sv.tinhDTB();
  document.getElementById("spanXepLoai").innerText = sv.xepLoai();
}
