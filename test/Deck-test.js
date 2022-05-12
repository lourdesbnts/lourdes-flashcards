const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
    let card1, card2, card3;
    let deck;
    let deck1, deck2;

    beforeEach( () => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What is a comma-separated list of related values?',
        ['array', 'object', 'function'], 'array');
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

        deck = new Deck();
        deck1 = new Deck([card1, card2, card3]);
        deck2 = new Deck([card1, card2]);
    })
    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    })

    it('should be an instance of Deck', () => {
        expect(deck).to.be.an.instanceof(Deck);
    })

    it('should start as an empty array', () => {
        expect(deck.cards).to.be.a('array');
    })

    it('should take in any deck of cards', () => {
        expect(deck1.cards).to.be.a('array');
        expect(deck1.cards).to.have.length(3);

        expect(deck2.cards).to.be.a('array');
        expect(deck2.cards).to.have.length(2);
    })

    it('should count cards', function() {
        expect(deck.countCards()).to.equal(0);
        expect(deck1.countCards()).to.equal(3);
        expect(deck2.countCards()).to.equal(2);
    });
})