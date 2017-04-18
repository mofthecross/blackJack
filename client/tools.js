class Card {
  constructor(suite, value) {
    this.suite = suite;
    this.value = value;
  }
}
class Deck {}

class Player {}

class Dealer {}

class Game {}

/* test */

const testCardClass = new Card('Diamonds', 8);
console.log('testCardClass', testCardClass);
console.log('testCardClass value should be 8:', testCardClass.value === 8);
console.log('testCardClass suite should be Diamonds:', testCardClass.suite === 'Diamonds');
