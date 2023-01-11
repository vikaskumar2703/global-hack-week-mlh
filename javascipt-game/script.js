// Initialize the deck of cards
var deck = [];
var suits = ["hearts", "diamonds", "clubs", "spades"];
var values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < values.length; j++) {
    var card = {suit: suits[i], value: values[j]};
    deck.push(card);
  }
}

// Shuffle the deck
function shuffle(deck) {
  for (var i = 0; i < deck.length; i++) {
    var randomIndex = Math.floor(Math.random() * deck.length);
    var temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }
  return deck;
}
deck = shuffle(deck);

// Deal a card
function dealCard() {
  return deck.pop();
}

var dealerCards = [dealCard(), dealCard()];
var playerCards = [dealCard(), dealCard()];

// Calculate the value of a hand
function calculateHand(hand) {
  var handValue = 0;
  var aceCount = 0;
  for (var i = 0; i < hand.length; i++) {
    var card = hand[i];
    if (card.value === "ace") {
      handValue += 11;
      aceCount++;
    } else if (card.value === "jack" || card.value === "queen" || card.value
