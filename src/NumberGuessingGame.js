// Import "useState"
import React, { Component, useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

// Rename the current "NumberGuessingGame" class to "NumberGuessingGameOld"
class NumberGuessingGameOld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberToGuess: getRandomNumber(),
      numberOfGuesses: 0,
      latestGuess: null,
    };

    /**
     * These lines are required to make the methods/functions declared on this
     *  class have the correct `this` object when they run.
     */
    this.handleGuess = this.handleGuess.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleGuess(guess) {
    this.setState({
      latestGuess: guess,
      numberOfGuesses: this.state.numberOfGuesses + 1,
    });
  }

  handleReset() {
    this.setState({
      numberToGuess: getRandomNumber(),
      numberOfGuesses: 0,
      latestGuess: null,
    });
  }

  // Copy the logic and return value from the render function
  render() {
    const isCorrectGuess = this.state.latestGuess === this.state.numberToGuess;

    const isGameOver =
      isCorrectGuess || this.state.numberOfGuesses === MAX_ATTEMPTS;

    return (
      <div>
        <h2>I'm thinking of a number from 1 to 100.</h2>
        <h2>
          Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
        </h2>
        <GuessControl onGuess={this.handleGuess} />
        {isGameOver && (
          <GameOver hasWon={isCorrectGuess} onReset={this.handleReset} />
        )}
        {!isGameOver && (
          <GuessMessage
            guess={this.state.latestGuess}
            numberToGuess={this.state.numberToGuess}
            numberOfGuesses={this.state.numberOfGuesses}
          />
        )}
      </div>
    );
  }
}

// Create a new function component called NumberGuessingGame
const NumberGuessingGame = () => {

  // Create a state variable and setter for "numberToGuess"
    // Initialize "numberToGuess" to the value from the class component version (getRandomNumber())
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());

  // Create a state variable and setter for "numberOfGuesses" 
    // Initialize "numberOfGuesses" to the value from the class component version (0)
  const [numberOfGuesses, setNumberOfGuesses] = useState(0)

  // Create a state variable and setter for "latestGuess" 
    // Initialize "latestGuess" to the value from the class component version (null)
  const [latestGuess, setLatestGuess] = useState(null)

  // Create a "handleGuess" function that takes "guess" as an argument
  const handleGuess = (guess) => {

    // Set the "latestGuess" state with the "guess" converted to a number using the Number function
    setLatestGuess(Number(guess));

    // Increment the "numberOfGuesses" state
    setNumberOfGuesses(numberOfGuesses + 1);
  }

  // Create a handleReset function
  const handleReset = () => {
    
    // Reset all 3 of the state properties the same way the "handleReset" function from the class component reset them
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  }

  // Paste logic and return value from render function in the class component
    // Remove any references to "this."
  const isCorrectGuess = latestGuess === numberToGuess;

    const isGameOver =
      isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

    return (
      <div>
        <h2>I'm thinking of a number from 1 to 100.</h2>
        <h2>
          Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
        </h2>
        <GuessControl onGuess={handleGuess} />
        {isGameOver && (
          <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
        )}
        {!isGameOver && (
          <GuessMessage
            guess={latestGuess}
            numberToGuess={numberToGuess}
            numberOfGuesses={numberOfGuesses}
          />
        )}
      </div>
    );
}

export default NumberGuessingGame;
