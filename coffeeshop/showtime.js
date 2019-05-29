let date = new Date();
let h = date.getHours(); // 0 - 23
var m = date.getMinutes(); // 0 - 59
var s = date.getSeconds(); // 0 - 59
var session = "AM";
function showTime() {
  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  //let result = condition ? value1 : value2;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  //在dom里加入这段话
  let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("time").innerText = time;
  document.getElementById("time").textContent = time;

  setTimeout(showTime, 1000);
}
showTime();
