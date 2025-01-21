const mainDiv=document.querySelector(".mainDiv")
for(let i = 1;i<256;i++){
    const grid=document.createElement("div");
    grid.style.backgroundcolor="red"
    mainDiv.appendChild(grid)
}
