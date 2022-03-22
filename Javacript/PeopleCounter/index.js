//document.getElementById("count-el").innerText=5;

// let count=0;
// console.log(10);

// let myAge=21;
// console.log(myAge);


//didnot work
// function decrement(){
//     if(count>0){
//         count--;
//         document.getElementById("count-d").innerText =count;
//     }

// }

//function that prints the sum of all the laps

// let lap1=1
// let lap2=20
// let lap3=32

// function lapCount(){
//     let sum=lap1 +lap2 +lap3

//     console.log(sum);   or console.log(lap1 +lap2 +lap3)
// }

// lapCount()
let saveEl= document.getElementById("save-el")
//listening to clicks and save data
let countEl= document.getElementById("count-el")
//grab the saveEl p and store it in a variable called saveEL

let count=0  



function increment() {
    
    count++
      countEl.innerText=count
    
}

//in number and strings , string always wins


//in save() - 1.create a variable that contains both count and '-'
// 2. Render the variable in the saveEl using innerText
//Make sure to not delete the existing content of the paragraph 
function save(){
    let countStr= count + " - "
    saveEl.textContent += countStr
    countEl.textContent=0
    count=0
    

}

