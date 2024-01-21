function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector("[data-create]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener('click', () => {
  const total = input.value;
  createBoxes(total);
})


function createBoxes(total) {
  boxes.innerHTML = "";
  if (total >= 1 && total <=100)
{  let boxElements = [];
  for (let i = 0; i < total; i++) {
    const boxWidth = 30 + 10 * i;
    const boxHeight = 30 + 10 * i;
    const boxColor = getRandomHexColor();
    boxElements.push(`<div style="background-color: ${boxColor}; width:${boxWidth}px; height:${boxHeight}px" class="box"></div>`);
  }
  
  
    boxes.innerHTML = boxElements.join(" ");
  input.value = "";
  }
}

const destroyBtn = document.querySelector("[data-destroy]");
destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
});
