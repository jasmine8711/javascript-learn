//onload change to woof
const btnText = document.getElementById("doge");
btnText.innerHTML = "woof!";
//hover change to woof woof!
btnText.onmouseover = function() {
  btnText.innerHTML = "woof woof !";
};
//mouse leave the button;
btnText.onmouseout = () => {
  btnText.innerHTML = "woof!";
};
//show the dog
const changeBg = document.querySelector("body");
btnText.addEventListener("click", function() {
  changeBg.classList.toggle("active");
});
