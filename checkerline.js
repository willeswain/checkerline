let button = document.getElementById("reset");

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");

box1.addEventListener("mouseover", event => {
  changeColor(event);
});
box2.addEventListener("mouseover", event => {
  changeColor(event);
});
box3.addEventListener("mouseover", event => {
  changeColor(event);
});
box4.addEventListener("mouseover", event => {
  changeColor(event);
});
box5.addEventListener("mouseover", event => {
  changeColor(event);
});

window.addEventListener("keypress", changeColor);

let body = document.body;

function changeColor(event) {
  let box = event.target;
  let color = box.style.backgroundColor;

  if (color == "black") {
    box.style.backgroundColor = "yellow";
  } else {
    box.style.backgroundColor = "black";
  }
  if (event.key === "g") {
    body.style.backgroundColor = "green";
  } else if (event.key === "w") {
    body.style.backgroundColor = "white";
  } else if (event.key === "r") {
    body.style.backgroundColor = "red";
  } else if (event.key === "b") {
    body.style.backgroundColor = "blue";
  }
  button.addEventListener("mousedown", reset);
  function reset(event) {
    box.style.backgroundColor = "black";
    body.style.backgroundColor = "white";
  }
}

