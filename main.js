const grid = document.querySelector(".container");
const reset = document.querySelector("#reset");
const num = document.querySelector("#confirmGridNumber");
let box
function newGrid(size) {
  grid.innerHTML = "";
  let gridSize = document.querySelector(".input-grid").value;
  if (size === undefined) {
    size = 16;
  }

  size = gridSize;
  for (let i = 1; i <= size ** 2; i++) {
    box = document.createElement("div");
    grid.appendChild(box);
    let width = 600 / size;
    box.setAttribute(
      "style",
      `width:${width}px; height: ${width}px; background-color: white`
    );
  }
}

function hover() {
   box.style.backgroundColor="black";
}

num.addEventListener("click", newGrid);
grid.addEventListener("mouseover",hover)
