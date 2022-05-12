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

    beforeEach( () => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
        ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What is a comma-separated list of related values?', 
        ['array', 'object', 'function'], 'array');
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?',
        ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

        deckSet1 = new Deck([card1, card2, card3]);
        deckSet2 = new Deck([card1, card2]);
        round1 = new Round(deck1);
        round2 = new Round(deck2);
    })

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    })

    it('should be an instance of Round', () => {
        expect(round1).to.be.an.instanceof(Round);
    })
})