const getFibonacciValue = require('./getFibonacciValue');
const getUserInput = require('./getUserInput');
const isValidUserInput = require('./isValidUserInput');

const handleInvalidArgs = () => {
   console.log(`last item on command line must be an integer`);
};

const handleValidArgs = (input) => {
  const num = Number(input);
  const fibonacciValue = getFibonacciValue(num);

  console.log(`The fibonacci value of ${input} is ${fibonacciValue}`);
};

const run = () => {
    const userInput = getUserInput();
    if(isValidUserInput(userInput)) {
      handleValidArgs(userInput);
    } else {
      handleInvalidArgs()
    }
};

run();
