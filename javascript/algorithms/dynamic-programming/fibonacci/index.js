const getFibonacciValue = require('./getFibonacciValue');
const getUserInput = require('./getUserInput');
const isValidUserInput = require('./isValidUserInput');

const isAskAgain = (userInput) => !isValidUserInput(userInput);

const handleInvalidInput = () => {
   console.log(`Input must be an integer\n`);
};

const handleValidInput = (input) => {
  const num = Number(input);
  const fibonacciValue = getFibonacciValue({ num });

  console.log(`The fibonacci value of ${input} is ${fibonacciValue}`);
};

const run = () => {
    let userInput = getUserInput();

    while(isAskAgain(userInput)) {
      handleInvalidInput();

      userInput = getUserInput();
    }

    handleValidInput(userInput);
};

run();
