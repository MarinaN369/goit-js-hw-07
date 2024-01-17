function changeColor() {
    const body = document.querySelector("body");
    const colorSpan = document.querySelector(".color");
    const randomColor = getRandomHexColor();

    body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
  }

  function getRandomHexColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  }

  const changeButton = document.querySelector(".change-color");
  changeButton.addEventListener("click", changeColor);
