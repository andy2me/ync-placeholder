var logo = document.querySelector(".logo");
var body = document.querySelector(".body");
var scribble = document.querySelector(".scribble svg");
var clicked = false;
var colors = ["#e6363e", "#3134a1", "#f1BC25", "#3134a1", "#f04e23", "#f04e23"];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

document.documentElement.style.setProperty("--accent-color", randomColor);
setTimeout(function() {
  logo.querySelector("svg").classList.add("logo-draw");
  logo.querySelector("svg").style.display = "block";
  scribble.classList.add("scribble-draw");
  scribble.style.display = "block";
}, 400);

logo.addEventListener("mouseenter", function(event) {
  if (!clicked) {
    body.querySelector(".title").classList.add("title-hide");
    body.querySelector(".old-new").classList.add("old-new-show");
  }
});

logo.addEventListener("mouseleave", function(event) {
  if (!clicked) {
    body.querySelector(".title").classList.remove("title-hide");
    body.querySelector(".old-new").classList.remove("old-new-show");
  }
});

logo.addEventListener("click", function(event) {
  event.preventDefault();
  if (!clicked) {
    body.querySelector(".title").classList.add("title-hide");
    body.querySelector(".old-new").classList.add("old-new-show");
    clicked = !clicked;
  } else {
    body.querySelector(".title").classList.remove("title-hide");
    body.querySelector(".old-new").classList.remove("old-new-show");
    clicked = !clicked;
  }
});
