//create two variables and give them a random value between 2 and 11

let firstCard = 6;
let secondCard = 15;


let sumEl= document.getElementById("sum-el")
let messageEl= document.getElementById("message-el");

let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = false;
let message = "";

function startGame() {
  if (sum < 21) {
    console.log("Still in the game , do you want to draw a new card ? ");
    //🙂
  } else if (sum === 21) {
    message = "You've got a blackjack !! ";
    //🥳
    hasBlackJack = true;
  } else {
    message = "Out of the game ! :') , we are logging out ";
    isAlive = false;
  }
  sumEl.textContent = "Sum : " + sum;
  messageEl.textContent=message;
}
