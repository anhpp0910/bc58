document.getElementById("btnTinhLuong").onclick = function () {
  var hours = Number(document.getElementById("soGioLam").value);
  var pay = Number(document.getElementById("tienLuong1Gio").value);
  var rate = 1.5;
  if (hours > 40) {
    var totalSalary = pay * 40 + pay * (hours - 40) * rate;
  } else {
    totalSalary = hours * pay;
  }
  document.getElementById("result").innerHTML =
    totalSalary.toLocaleString() + " VND";
};
