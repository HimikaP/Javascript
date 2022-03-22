// grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

//make two var. to store name and greeting
let name= "Imjyot"
let greeting=" Hi , how're you doing ? "

//Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = name + greeting

//add an emoji in the end and you have to write it below this code

welcomeEl.innerText += "😃"