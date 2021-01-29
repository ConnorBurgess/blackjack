let myDeck = {
  deck: [],
  suits:['H', 'D', 'S', 'C'],
  values: '2,3,4,5,6,7,8,9,0,J,Q,K,A',
  initializeDeck() {
    const { 
      suits,
      values,
      deck
    } = this;

  for (let value of values.split(',')) {
    for (let suit of suits) { 
      let cardId = (value + suit);
      deck.push(cardId)
    }
  }
  return deck;
  },
  //Durstenfeld Shuffle
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
},
  drawCard() {
    let poppedCard = this.deck.pop();
    console.log(poppedCard)
    return poppedCard;
}

}

function Player() {
  this.hand = []

} 
//Initialize Players
let playerOne = new Player();
let playerTwo = new Player();
playerOne.hand[1]
//Initialize and shuffle deck
myDeck.initializeDeck();
myDeck.shuffleDeck(myDeck.deck);
//console.log(myDeck.deck)
playerOne.hand = [myDeck.drawCard(), myDeck.drawCard()];
playerTwo.hand = [myDeck.drawCard(), myDeck.drawCard()];
console.log(playerOne.hand)
console.log(playerTwo.hand)
alert(myDeck.drawCard());

$(document).ready(function () {

$("#card3").append(`<img src="/img/${playerOne.hand[0]}.png">`);
$("card3 img").hide();
$("#card4").append(`<img src="/img/${playerOne.hand[1]}.png">`);
$("#card1").append(`<img src="/img/${playerTwo.hand[0]}.png">`);
$("#card2").append(`<img src="/img/${playerTwo.hand[1]}.png">`);

});