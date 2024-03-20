
let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function getRandom() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random > 10) {
    return 10
  }else if(random === 1){
    return 11
  }else{
    return random
  }
}

function startGame(){
  isAlive = true
  let firstCard = getRandom();
  let secondCard = getRandom();
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {

  cardsEl.textContent = "Cards: " 
  sumEl.textContent = "Sum: " + sum;
  for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    messageEl.textContent = "Want to play a new round?"
  }else if(sum === 21){
    messageEl.textContent = "You won!!"
    hasBlackJack = true
  }else{
    messageEl.textContent = "You lost"
    isAlive = false
  }

}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = 7;
    sum = sum + card
    cards.push(card);
    renderGame();
  }
}
