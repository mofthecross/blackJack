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

class Player {
  constructor(name) {
    this.name = name;
    this.score = null;
    this.play = true;
    this.hand = [];
  }

  hit(deck) {
    const card = deck.drawCard();
    this.hand.push(card);
    this.calcScore(card);
  }

  calcScore(card) {
    if (typeof card.value === 'string') {

      if (card.value === 'A') {

        this.score = (this.score + 11) > 21
          ? this.score + 1
          : this.score + 11

      } else {
        this.score += 10;
      }

    } else {
      this.score += card.value;
    }

    if (this.score > 21) {
      this.play = false;
      console.log('busted!');
    }
  }
}

class Dealer extends Player {
  constructor(name) {
    super(name)
  }

  deal(deck, player) {
    if (player.name === this.name) {
      this.hit(deck);
    } else {
      player.hit(deck);
    }
  }
}

class Game {}

/* test

const testCardClass = new Card('Diamonds', 8);
console.log('Card class', testCardClass);
console.log('Card class value should be 8:', testCardClass.value === 8);
console.log('Card class suite should be Diamonds:', testCardClass.suite === 'Diamonds');


const testDeckClass = new Deck();
console.log('Deck class:', testDeckClass);
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
console.log('Deck should have a drawCard method:', typeof testDeckClass.shuffle === 'function');

const testPlayerClass = new Player('michael');
console.log('Player class exists:', testPlayerClass.name === 'michael');
const newDeck = new Deck();
newDeck.build();
newDeck.shuffle();
testPlayerClass.hit(newDeck);
testPlayerClass.hit(newDeck);
testPlayerClass.hit(newDeck);
console.log('Player class should have card when hit method is invoked ',  testPlayerClass.hand.length > 0);

const testDealerClass = new Dealer('john');
console.log('Dealer class exists:', testDealerClass.name === 'john');

*/
