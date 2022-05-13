# FlashCards!

## Abstract
This project uses 7 weeks of learnings in JavaScript, implementing Test Driven Development to create a playable deck of flash cards that the user engages with in the command line.

## Installation
Fork and clone down this repository.
`git clone [remote]`

Once you have cloned the repository onto your machine, navigate into the directory and install the dependencies.
`cd flashcards
npm install`

After writing tests, make sure to fail before beginning implementation code. In this instance, and when testing code you have written, run `npm test`

If adding feature code, make sure to add new files within the **src** directory. The corresponding tests should be housed in the **test** directory. `module.exports` and `require` syntax will be used to share information.

To interact with the flash cards in the command line, run `node index.js`

## Technologies
**JavaScript | Mocha | Chai**

## Game Play
When interacting with the game in the command line:
Key `up` or `down` to navigate between answer choices.
Once, you've selected your guess, hit `enter` or `return` to select your answer and move on to the next question.
Repeat these steps for the remainder of the deck.
Once you have reached the end of the deck, you'll see a message with your score!

## See the Flash Cards In Action
![Functionality GIF](https://media.giphy.com/media/oAbPPVAk7pJwhrRRl4/giphy.gif)


