const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
    let card1, card2, card3;
    let deck1, deck2;
    let round1, round2;
    let turn;
    let guess;

    beforeEach( () => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
        ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What is a comma-separated list of related values?', 
        ['array', 'object', 'function'], 'array');
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?',
        ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

        deck1 = new Deck([card1, card2, card3]);
        deck2 = new Deck([card1, card2]);
        round1 = new Round(deck1);
        round2 = new Round(deck2);
        turn = new Turn(guess, card1);
    })

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    })

    it('should be an instance of Round', () => {
        expect(round1).to.be.an.instanceof(Round);
    })

    it('should show the current card being played', () => {
        round1.returnCurrentCard();
        expect(round1.returnCurrentCard()).to.deep.equal(card1);
    })

    it('should have a card ready when created', function() {
        expect(round1.currentCard).to.be.an.instanceof(Card);
    });

    it('should start at 0 turns', () => {
        expect(round1.turns).to.equal(0);
    })

    it('should store the first card as the current card', function() {
        expect(round1.currentCard).to.deep.equal(card1);
        expect(round2.currentCard).to.deep.equal(card1);
    });

    it('should return the current card', function() {
        expect(round1.returnCurrentCard()).to.deep.equal(card1);
        expect(round2.returnCurrentCard()).to.deep.equal(card1);
    });

    it('should update turn count by 1 for each turn', function() {
        round1.takeTurn('object');
        round1.takeTurn('function');
        round1.takeTurn('array');
        expect(round1.turns).to.equal(3);
    });

    // it('should create a new Turn instance when a guess is made', () => {
    //     round1.takeTurn('object');
    //     expect(round1.currentTurn).to.be.an.instanceof(Turn);
    // })


})