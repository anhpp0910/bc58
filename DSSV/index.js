var dssv = [];

var dataJson = localStorage.getItem("DSSV_LOCAL");
if (dataJson != null) {
  let result = JSON.parse(dataJson);
  renderDssv(dssv);
  // convert 1 array chứa object k có method trở thành 1 array chứa object có method
  // map() ~ convert
  dssv = result.map(function (item) {
    return new SinhVien(
      item.maSV,
      item.tenSV,
      item.mailSV,
      item.passSV,
      item.diemToan,
      item.diemVan
    );
  });
  renderDssv(dssv);
}

function themSV() {
  var _maSV = document.getElementById("txtMaSV").value;
  var _tenSV = document.getElementById("txtTenSV").value;
  var _mailSV = document.getElementById("txtEmail").value;
  var _passSV = document.getElementById("txtPass").value;
  var _diemToan = Number(document.getElementById("txtDiemToan").value);
  var _diemVan = Number(document.getElementById("txtDiemVan").value);
  // var svInfo = {
  //   maSV: _maSV,
  //   tenSV: _tenSV,
  //   mailSV: _mailSV,
  //   passSV: _passSV,
  //   diemToan: _diemToan,
  //   diemVan: _diemVan,
  //   tinhDTB: function () {
  //     return (this.diemToan + this.diemVan) / 2;
  //   },
  // };
  var svInfo = new SinhVien(
    _maSV,
    _tenSV,
    _mailSV,
    _passSV,
    _diemToan,
    _diemVan
  );

  // validate
  var isValid =
    kiemTraMaSV(svInfo.maSV, dssv) &
    kiemTraDoDai(svInfo.maSV, "spanMaSV", 3, 5);

  isValid = isValid & kiemTraDoDai(svInfo.passSV, "spanMatKhau", 7, 8);

  isValid = isValid & kiemTraEmail(svInfo.mailSV);
  if (isValid) {
    dssv.push(svInfo);
  }

  // lưu thông tin vào localStorage
  var dataJson = JSON.stringify(dssv);
  localStorage.setItem("DSSV_LOCAL", dataJson);

  console.log(dssv);
  clearFields();
  renderDssv(dssv);
}

function xoaSV(id) {
  var viTri = dssv.findIndex(function (sv) {
    return sv.maSV == id;
  });
  dssv.splice(viTri, 1);
  renderDssv(dssv);
}

function suaSV(id) {
  var viTri = dssv.findIndex(function (sv) {
    return sv.maSV == id;
  });
  var sv = dssv[viTri];
  console.log(sv);
  // đưa thông tin lên form
  document.getElementById("txtMaSV").value = sv.maSV;
  document.getElementById("txtTenSV").value = sv.tenSV;
  document.getElementById("txtEmail").value = sv.mailSV;
  document.getElementById("txtPass").value = sv.passSV;
  document.getElementById("txtDiemToan").value = sv.diemToan;
  document.getElementById("txtDiemVan").value = sv.diemVan;
}

/*
JSON: JSON.stringtify() ~ array => json, JSON.parse() json => array: convert data
localStorage: lưu trữ, chỉ lưu được định dạng json
*/
