const grid = document.querySelector(".container");
const reset = document.querySelector("#reset");
const num = document.querySelector("#confirmGridNumber");
var click = document.querySelector("#click");
var colorpicker = document.querySelector("#colorpick");
let random = document.querySelector("#random");
let box;

var onc = "mouseover";
click.addEventListener("click", () => {
  if (onc === "mouseover") {
    click.innerHTML = "Hover mode";
    onc = "click";
  } else {
    click.innerHTML = "Click mode";
    onc = "mouseover";
  }
  newGrid();
});
function newGrid(size) {
  grid.innerHTML = "";
  let gridSize = document.querySelector(".input-grid").value;
  if (Number(document.querySelector(".input-grid").value) >= 200) {
    alert("The limit is only 200");
    size = 200;
  } else {
    if (size === undefined) {
      size = 16;
    } else {
      size = gridSize;
    }
  }

  for (let i = 1; i <= size ** 2; i++) {
    box = document.createElement("div");
    grid.appendChild(box);
    let width = 600 / size;
    box.setAttribute(
      "style",
      `width:${width}px; height: ${width}px; background-color: white`
    );
  }
 normal()
}

newGrid();
num.addEventListener("click", newGrid);
reset.addEventListener("click", () => {
  const select = grid.querySelectorAll("div");
  select.forEach((box) => {
    box.style.backgroundColor = "white";
  });
});
reset.addEventListener("click",normal);
reset.addEventListener("click",normal);

random.addEventListener("click",randomizer);

function randomizer() {
  const select = grid.querySelectorAll("div");
  select.forEach((box) => {
    box.addEventListener(`${onc}`, () => {
      box.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 500
      )}, ${Math.floor(Math.random() * 500)}, ${Math.floor(
        Math.random() * 500
      )})`;
    });
  });
}
function normal(){
  const select = grid.querySelectorAll("div");
  select.forEach((box) => {
    box.addEventListener(`${onc}`, () => {
      box.style.backgroundColor = colorpicker.value;
    });
  })
}