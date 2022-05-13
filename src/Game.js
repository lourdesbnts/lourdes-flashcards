const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/deck');

class Game {
  constructor() {
    this.cards = [];
  }
  printMessage(deck = this.deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }
  printQuestion(round = this.currentRound) {
      util.main(round);
  }
  start() {
    this.createCards();
    this.createDeck();
    this.createRound();
    this.printMessage();
    this.printQuestion();
  }
  createCards() {
    prototypeQuestions.forEach((question) => {
      this.cards.push(new Card(question.id, question.question, question.answers, question.correctAnswer));
    })
  }
  createDeck() {
    this.deck = new Deck(this.cards);
  }
  createRound() {
    this.currentRound = new Round(this.deck);
  }
};

module.exports = Game;