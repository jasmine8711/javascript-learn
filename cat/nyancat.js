const mao = document.getElementById("cat");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const sun = document.getElementById("sun");
//click btn
const audio = document.getElementById("bgMusic");
btn.onclick = () => {
  btn.innerHTML = "Stop the rain"; //button changes text
  mao.classList.toggle("cat-active"); //first cat move
  body.classList.toggle("bgbody"); // bg showed
  sun.classList.toggle("none"); //sun gone
  audio.play(); //music play
};
//设置画布大小
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
//得到img链接
const img = new Image();
img.src = "./image/cat.png";
//设置img的数量
const numOfCats = 25;
let cats = [];
for (let i = 0; i < numOfCats; i++) {
  let x = Math.floor(Math.random() * canvas.width);
  let y = Math.floor(Math.random() * canvas.height);
  cats[i] = new cat(x, y);
}

//一只猫的动画
function cat(x, y) {
  this.x = x;
  this.y = y;
  //下雨
  this.fall = function() {
    this.y = this.y + 1;
  };
  //show用来显示之前得到的img图像
  this.show = function() {
    context.drawImage(img, this.x, this.y, 100, 50);
  };
}

//基本的框架
function draw() {
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < numOfCats; i++) {
    cats[i].show(); //这多只猫去执行show这个function。
  }
}

function update() {
  draw();
  window.requestAnimationFrame(update);
}

update();
