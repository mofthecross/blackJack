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
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i -= 1) {
      const randomIndex = this.getRandom(0, i);
      const temp = this.cards[randomIndex];
      this.cards[randomIndex] = this.cards[i];
      this.cards[i] = temp;
    }
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  drawCard() {
    return this.cards.pop();
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
console.log('testDeckClass:', testDeckClass);
testDeckClass.build();
console.log('Deck should build 52 cards:', testDeckClass.cards.length === 52);
const firstCard = testDeckClass.cards[0];
const lastCard = testDeckClass.cards[52-1];
console.log('Unshuffled deck should have the first card value of 2:', firstCard.value === 2);
console.log('Unshuffled deck should have the first card value of KING:', lastCard.value === 'KING');
testDeckClass.shuffle();
const shuffledFirstCard = testDeckClass.cards[0];
const shuffledlastCard = testDeckClass.cards[52-1];
console.log('Deck should have a shuffle method that works:', firstCard !== shuffledFirstCard &&  lastCard !== shuffledlastCard);
console.log('Deck should have a drawCard method', typeof testDeckClass.shuffle === 'function');
