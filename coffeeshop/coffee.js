//显示时间
let myVar = setInterval(function() {
  myTimer();
}, 1000);

function myTimer() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.getElementById("time").innerHTML = t;
}

let d = new Date();
let w = d.getDay(); //0-6 week
let h = d.getHours(); // 0 - 23
let m = d.getMinutes(); // 0 - 59

//check time open or closed!
document.getElementById("open").innerText = close;
document.getElementById("open").textContent = "CLOSED";
if (((h >= 9 && h <= 12) || (h >= 13 && h <= 17)) && w !== 6) {
  document.getElementById("open").innerText = open;
  document.getElementById("open").textContent = "OPEN";
}

//btn
const btn = document.getElementById("btn");
btn.onclick = () => {
  let week = document.querySelectorAll(".weekday");
  let weekDay = week[w - 1];
  let amHour = `9.00u-${h}.00u`;
  let pmHour = `13.00u-${h}.00u`;
  if (h >= 9 && h < 12) {
    weekDay.children[1].innerText = amHour;
  } else if (h >= 13 && h <= 17) {
    weekDay.children[2].innerText = pmHour;
  }
};
