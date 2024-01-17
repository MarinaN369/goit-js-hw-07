function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector("[data-create]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener('click', () => {
  const amount = document.querySelector('input').value;
  createBoxes(amount);
})


function createBoxes(total) {
  boxes.innerHTML = "";
  if (total >= 1 && total <=100)
{  let markup = [];
  for (let i = 0; i < amount; i++) {
    const boxWidth = 30 + 10 * i;
    const boxHeight = 30 + 10 * i;
    const boxColor = getRandomHexColor();
    markup.push(<div style="background-color: ${boxColor}; width:${boxWidth}px; height:${boxHeight}px" class="box"></div>\n);
  }
  markup = markup.join('\n\n');

  
  boxes.innerHTML = markup;
  document.querySelector('input').value = "";
  }
}

const destroyBtn = document.querySelector("[data-destroy]");
destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
});
