// Import useState
import React, { useState, Component } from "react";
import Button from "./Button";

// Rename the current GuessControl class to GuessControlOld
class GuessControlOld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGuess: "",
    };

    /**
     * These lines are required to make the methods/functions declared on this
     *  class have the correct `this` object when they run.
     */
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitGuess = this.onSubmitGuess.bind(this);
  }

  handleInputChange(event) {
    this.setState({ currentGuess: event.target.value });
  }

  onSubmitGuess() {
    // Since the values from an HTML input are strings by default,
    //  convert to a number for the returned guess value
    //  by passing in the string to the Number function.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    this.props.onGuess(Number(this.state.currentGuess));
    this.setState({ currentGuess: "" });
  }

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.currentGuess}
          onChange={this.handleInputChange}
        />
        <Button onClick={this.onSubmitGuess}>Submit Guess</Button>
      </div>
    );
  }
}

// Create a new function component called "GuessControl" that will take an "onGuess" prop
const GuessControl = ({onGuess}) => {
  // Create a new state variable named "currentGuess" with setter "setCurrentGuess" and default value of an empty string
  const [currentGuess, setCurrentGuess] = useState('');
  // Create a handleInputChange function within the component that updates the "currentGuess" state value when the user changes the value in the input
  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value)
  }
  // Create an "onSubmitGuess" function that calls the "onGuess" prop with the currentGuess value converted to a number and also resets the currentGuess to an empty string when it is called
  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess(``);
  }
  // Copy the return value from the render function in the class component to be the return value in the new function component
  return (
    // Remove any references to "this"
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      {/* Set the onClick property on the button to refer to this function */}
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;
