const button1 = document.querySelector("#confirmGridNumber");
button1.addEventListener("click", drawGrid);
const mainDiv = document.querySelector(".mainDiv");
function drawGrid() {
    
  const gridNumber = document.querySelector(".input-grid");
  const num = gridNumber.value;
  const grid = document.createElement("div");
  if(grid){

  grid.remove();
  }
  else{
    for(let i = 1; i <= num * num; i++) {
    
    grid.style.backgroundColor = "red";
    mainDiv.appendChild(grid);
  
}
  }
}
