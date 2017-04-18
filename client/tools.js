class Card {
  constructor(suite, value) {
    this.suite = suite;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }
  build() {
    const cardValues = [2,3,4,5,6,7,8,9,10,'A','JACK', 'QUEEN','KING'];
    const suites = ['Clubs','Hearts', 'Diamonds', 'Spades'];

    cardValues.forEach( cardValue => {
      suites.forEach(suite => {
        const newCard = new Card(suite, cardValue);
        this.cards.push(newCard);
      });
    });
    //return this.cards;
  }
}

class Player {}

class Dealer {}

class Game {}

/* test

const testCardClass = new Card('Diamonds', 8);
console.log('testCardClass', testCardClass);
console.log('testCardClass value should be 8:', testCardClass.value === 8);
console.log('testCardClass suite should be Diamonds:', testCardClass.suite === 'Diamonds');
*/
const testDeckClass = new Deck();
console.log('testCardClass', testDeckClass);
testDeckClass.build();
console.log('testCardClass should build the cards array', testDeckClass.cards.length === 52);
