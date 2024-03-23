var colors = ["red", "blue"];
console.log(colors.length);

// push
colors.push("black");
console.log(colors);

// CRUD - create read update delete

// Update giá trị của 1 phần tử
colors[2] = "Super Black";
console.log(colors);

// splice
colors.splice(0, 1);
console.log(colors);

var menu = ["bún bò", "cơm tấm", "hủ tiếu"];
menu.push("bánh canh cua Cà Mau");
console.log("Menu sau khi thêm món bánh canh cua: ", menu);

menu[0] = "bún bò Huế";
console.log("Menu sau khi update món bún bò: ", menu);

// tìm kiếm 1 món ăn trong danh sách món ăn dựa trên keyword

var keyword = "bún bò Huế";
// duyệt mảng
var flag = -1;
for (var i = 0; i < menu.length; i++) {
  if (menu[i] == keyword) {
    flag = i;
  }
}
// kiểm tra có tìm thấy món ăn hay không
if (flag != -1) {
  console.log("Tìm thấy ở index: ", flag);
} else {
  console.log("Không tìm thấy");
}

// xoá món hủ tiếu ra khỏi menu
// var delPo = -1;
// for (var i = 0; i < menu.length; i++) {
//   if (menu[i] == "hủ tiếu") {
//     delPo = i;
//   }
// }
// console.log("Vị trí hủ tiếu: ", delPo);
// menu.splice(delPo, 1);
// console.log("Menu sau khi xoá món hủ tiếu: ", menu);

// indexOf w3
menu.splice(menu.indexOf("hủ tiếu"), 1);
console.log("Menu sau khi xoá món hủ tiếu: ", menu);
