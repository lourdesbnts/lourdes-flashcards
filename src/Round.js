const Turn = require('./Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentTurn = '';
        this.currentCard = deck.cards[0];
    }

    returnCurrentCard() {
        return this.deck.cards[this.turns];
    }

    takeTurn(guess) {
        const currentCard = this.returnCurrentCard();
        const turn = new Turn(guess, currentCard);
        this.turns ++;
        turn.evaluateGuess();
        if (turn.isCorrect === false) {
          this.incorrectGuesses.push(currentCard.id);
        }
        return turn.giveFeedback();
    }
}















module.exports = Round;