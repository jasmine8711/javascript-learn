const cat = document.getElementById("cat");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const sun = document.getElementById("sun");
//click btn
const audio = document.getElementById("bgMusic");
btn.onclick = () => {
  btn.innerHTML = "Stop the rain"; //button changes text
  cat.classList.toggle("cat-active");
  body.classList.toggle("bgbody");
  sun.classList.toggle("none");
  audio.play(); //music play
};
