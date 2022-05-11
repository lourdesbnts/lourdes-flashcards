const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
    let card1, card2;
    let turn1, turn2;

    beforeEach( () => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What is a comma-separated list of related values?',
        ['array', 'object', 'function'], 'array');
        turn1 = new Turn('object', card1);
        turn2 = new Turn('function', card2);
    })
    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of a turn', () => {
        expect(turn1).to.be.an.instanceof(Turn);  
    })

    it('should return the players guess', () => {
        expect(turn1.returnGuess()).to.equal('object');
    })

    it('should return a card', () => {
        expect(turn1.returnCard()).to.be.an.instanceof(Card);
    })

    it('should evaluate the guess', () => {
        expect(turn1.evaluateGuess()).to.equal(true);
        expect(turn2.evaluateGuess()).to.equal(false);

    })

    it('should give feedback based on if the user got the guess right or not', () => {
        expect(turn1.giveFeedback()).to.equal('correct!');
        expect(turn2.giveFeedback()).to.equal('incorrect!');
    })
})
