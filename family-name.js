var spans = document.querySelectorAll("tspan");
var i = 0;
for (i = 0; i < spans.length; i++) {
  spans[i].setAttribute("rotate", (10 * Math.random() - 5));
}