//one cat move
function catMove(cat, startingX) {
  let y = 0;
  let x = startingX;
  //to make the speed different
  const acceleration = Math.floor(Math.random() * 7) + 3;

  let id = setInterval(frame, 10);

  function frame() {
    if (y >= window.innerHeight) {
      clearInterval(id);
      cat.style.display = "none";
    } else {
      y = y + Math.random() * acceleration;
      //x++;
      cat.style.top = y + "px";
      cat.style.left = x + "px";
    }
  }
}

btn.onclick = () => {
  //create <img>
  let cat = new Image(100, 50); // width, height values are optional params
  cat.src = "./image/cat.png";
  //get the container
  const catainer = document.getElementById("catainer");
  //add cat to container
  catainer.append(cat);
  cat.style.position = "absolute";

  catMove(cat, 0);
  let counter = 0;
  let id = setInterval(function() {
    if (counter >= 20) {
      counter = 0;
      clearInterval(id);
      audio.pause();
    }
    counter++;

    //create a lot of cats
    for (let i = 0; i < 15; i++) {
      let tmpCat = new Image(100, 50);
      tmpCat.src = "./image/cat.png";
      catainer.append(tmpCat);
      x = Math.floor(Math.random() * window.innerWidth);
      tmpCat.style.position = "absolute";
      catMove(tmpCat, x);
    }
  }, 500);

  const btn = document.getElementById("btn");
  const body = document.querySelector("body");
  const sun = document.getElementById("sun");
  const audio = document.getElementById("bgMusic");
  btn.innerHTML = "Stop the rain"; //button changes text
  body.classList.toggle("bgbody"); // bg showed
  sun.classList.toggle("none"); //sun gone
  audio.play();
};
