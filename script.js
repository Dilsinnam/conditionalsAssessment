let userChoice = prompt("Heads or Tails?");
let randomNumber =  Math.floor(Math.random() * 2);
let computerChoice;

if (randomNumber == 0) {
    computerChoice = "Heads"
} else {
    computerChoice = "Tails"
}

if (userChoice === computerChoice) {
    alert("You guessed right! The coin landed on " + userChoice + "!");
} else {
    alert("Sorry, the coin landed on " + computerChoice + ".");
}

let birthYear = prompt("What year were you born?")
const currentYear = 2022

if ((currentYear - birthYear) > 21) {
    alert("You are old enough to drink in the US! Go party.");
} else if ((currentYear - birthYear) === 21) {
    alert("Just made it! You are barely old enough to drink in the US.");
} else if ((currentYear - birthYear) < 21) {
    alert("Sorry, but you're gonna have to wait to drink in the US.");
}