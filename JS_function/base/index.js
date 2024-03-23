function tinhDTB(toan, van) {
  var dtb = (toan + van) / 2;
  return dtb;
}

var dtb1 = tinhDTB(5, 9);
console.log("DTB1: " + dtb1);

var dtb2 = tinhDTB(6, 7);
console.log("DTB2: " + dtb2);

function xepLoai(dtb) {
  if (dtb >= 5) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}
