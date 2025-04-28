let user = {
  name: "Jhon",
  surname: "Smith",
};
user.name = "pete";

delete user.name

let schedule={}
schedule["age"]="34";
function isEmpty(schedule){
    if(schedule!==undefined){
        console.log(true)
    }
    else{
        console.log(false)
    }

}

isEmpty(schedule)
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum=0
for(let k in salaries){
    sum=sum+salaries[k];
}
console.log(sum)