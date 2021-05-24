var omikuzi_items = ["大吉", "中吉", "小吉", "凶", "大凶"];

var btn = document.getElementById("btn");
var disp = document.getElementById("disp");
var num = 0;

btn.addEventListener("click", function () {
  var num = Math.floor(Math.random() * omikuzi_items.length);
  var result = omikuzi_items[num];
  disp.innerHTML = result;

  if (result == "大吉") {
    alert("おめでとう！");
  } else if (result == "凶") {
    alert("気にするなよ");
  } else {
    alert("まぁまぁか");
  }
})