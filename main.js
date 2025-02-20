const grid=document.querySelector(".container");
const reset=document.querySelector("#reset");
const num=document.querySelector("#confirmGridNumber");



function newGrid(size){
   grid.innerHTML="";
   let gridSize= document.querySelector(".input-grid").value;
   if(size===undefined){
    size=16;
   }

   size=gridSize;
   for(let i=1;i<=size**2;i++){
    const box=document.createElement("div");
    grid.appendChild(box);
    let width=600/size;
    box.setAttribute("style",`width:${width}px; height: ${width}px; background-color: white`);
    }
   }
num.addEventListener("click",newGrid);