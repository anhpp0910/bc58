// input tài khoản
var accountEl = document.getElementById("account");
// accountEl.value = "anhpp@gmail.com";

// input mật khẩu
var passwordEl = document.getElementById("password");

console.log("Thông tin: ", accountEl.value, passwordEl.value);

// function
function login() {
  var accountValue = accountEl.value;
  var passwordValue = passwordEl.value;
  console.log("Đăng nhập nè!");
  console.log("Thông tin: ", accountEl.value, passwordEl.value);
  //   show ra thông tin đăng nhập
  document.getElementById("result").innerHTML = ` <h5>
      Account: ${accountValue}
      <br />
      Password: ${passwordValue}
    </h5>`;
}

// onclick ~ event

// function name() {
//   code;
// }
