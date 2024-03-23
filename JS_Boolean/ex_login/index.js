// Swal.fire("Any fool can use a computer");

function checkPassword() {
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;
  var isValid = password1 == password2;
  if (isValid) {
    Swal.fire("Mật khẩu hợp lệ!!");
  }
  if (!isValid) {
    Swal.fire(`Mật khẩu không hợp lệ!! <br> ${password1} - ${password2}`);
  }
}
