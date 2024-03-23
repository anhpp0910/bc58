/* kiểm tra id
 id này chưa được sử dụng => tìm ko thấy => hợp lệ => return true
 ngược lại tìm thấy => đã có người sử dụng id này => return false => xuất ra thông báo
*/

function kiemTraMaSV(id, dssv) {
  var viTri = dssv.findIndex(function (item) {
    return item.maSV === id;
  });
  if (viTri != -1) {
    document.getElementById("spanMaSV").innerHTML = "Mã sinh viên đã tồn tại!";
    return false;
  } else {
    document.getElementById("spanMaSV").innerHTML = "";
    return true;
  }
}

function kiemTraDoDai(value, idError, min, max) {
  var length = value.length;
  if (min <= length && max >= length) {
    document.getElementById(idError).innerHTML = "";
    return true;
  } else {
    document.getElementById(
      idError
    ).innerHTML = `Độ dài phải từ ${min} đến ${max} kí tự`;
    return false;
  }
}

function kiemTraEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isValid = re.test(email);
  if (isValid) {
    document.getElementById("spanEmailSV").innerHTML = "";
    return true;
  }
  document.getElementById("spanEmailSV").innerHTML = "Email không hợp lệ!";
  return false;
}
