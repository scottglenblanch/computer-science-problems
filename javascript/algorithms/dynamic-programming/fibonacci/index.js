const getLastArg = () => process.argv[process.argv.length - 1];

const isValidArgs = () => {
  const lastArg = getLastArg();
  const isInNumberFormat = !isNaN(Number(lastArg));

  return isInNumberFormat && lastArg.indexOf('.') === -1;
};

const handleInvalidArgs = () => {
   console.log(`last item on command line must be an integer`);
};

const getFibonacci = (num, memoizationStore = {0: 1, 1: 1}) => {
  const hasValueStored = memoizationStore[num] !== undefined;
  const value = hasValueStored ?
    memoizationStore[num] :
    (
      getFibonacci(num - 1, memoizationStore) +
      getFibonacci(num - 2, memoizationStore)
    );

  // side effect
  memoizationStore[num] = value;

  return value;
}

const handleValidArgs = () => {
  const numFromInput = Number(process.argv[process.argv.length - 1]);
  const output = getFibonacci(numFromInput);

  console.log(output)
};

const run = () => {
    if(isValidArgs()) {
      handleValidArgs();
    } else {
      handleInvalidArgs()
    }
};

run();
