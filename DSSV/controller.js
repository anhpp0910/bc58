function renderDssv(dssv) {
  var contentHTML = "";
  for (var i = 0; i < dssv.length; i++) {
    contentHTML += `<tr>
    <th>${dssv[i].maSV}</th>
    <th>${dssv[i].tenSV}</th>
    <th>${dssv[i].mailSV}</th>
    <th>${dssv[i].tinhDTB()}</th>
    <th><button class="btn btn-danger mx-1" onclick="xoaSV('${
      dssv[i].maSV
    }')">Xoá</button>
    <button class="btn btn-warning mx-1" onclick="suaSV('${
      dssv[i].maSV
    }')">Sửa</button></th>
    </tr>`;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function clearFields() {
  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtDiemToan").value = "";
  document.getElementById("txtDiemVan").value = "";
}
