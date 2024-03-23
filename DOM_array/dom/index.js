// querySelector
// var titleTag = document.querySelector(".container .title");
// titleTag.style.color = "red";

// querySelectorAll
var titleList = document.querySelectorAll(".title");
console.log("titleList", titleList);
for (var i = 0; i < titleList.length; i++) {
  titleList[i].style.color = "green";
}
