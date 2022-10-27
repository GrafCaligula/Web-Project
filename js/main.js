function changeColor() {
  const element = document.getElementById("third");

  if (element.style.backgroundColor == "blue") {
    element.style.backgroundColor = "rebeccapurple";
  } else {
    element.style.backgroundColor = "blue";
  }
}