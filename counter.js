var disp_cout = document.getElementById("disp-count")

var up = document.getElementById("up");
var down = document.getElementById("down");

var count = 0;

up.addEventListener('click', function () {
  count += 1;
  disp_cout.innerHTML = count;
})
down.addEventListener('click', function () {
  count -= 1;
  disp_cout.innerHTML = count;
})
