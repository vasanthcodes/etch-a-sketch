

const button1= document.querySelector(".button1").addEventListener('click',drawGrid())
const mainDiv=document.querySelector(".mainDiv")
function drawGrid(){
    const gridNumber = document.querySelector("#myInput");
    let num= Number(gridNumber.value);
    // console.log(inputValue);
    ;
    // if(gridNumber<=64){
    for(let i = 1;i<num*num;i++){
    const grid=document.createElement("div");
    grid.style.backgroundColor="red"
    mainDiv.appendChild(grid)}
    // else{
    //     alert("please enter a valid number")
    }
// }


