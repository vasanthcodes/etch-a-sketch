

const button1= document.querySelector("#confirmGridNumber")
.addEventListener('click',drawGrid)
const mainDiv=document.querySelector(".mainDiv")
function drawGrid(){
    // const gridNumber = Number(document.querySelector(".inputgrid").value);
    // gridNumber *= gridNumber;
    // if(gridNumber<=64){
    for(let i = 1;i<64;i++){
    const grid=document.createElement("div");
    grid.style.backgroundColor="red"
    mainDiv.appendChild(grid)}
    // else{
    //     alert("please enter a valid number")
    }
// }


