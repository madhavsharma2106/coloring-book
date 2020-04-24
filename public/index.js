const drawing = document.querySelector("#drawing");

drawing.addEventListener("click", (event) => {
  event.target.style.fill = "green";
});
