const getBaseMemoizationStore = () => ({
	0: 0,
	1: 1
});

const getFibonacciValue = (num, memoizationStore = getBaseMemoizationStore()) => {
	const hasValueStored = memoizationStore[num] !== undefined;
	const value = hasValueStored ?
		memoizationStore[num] :
		(
			getFibonacciValue(num - 1, memoizationStore) +
			getFibonacciValue(num - 2, memoizationStore)
		);

	// side effect
	memoizationStore[num] = value;

	return memoizationStore[num];
};

module.exports = getFibonacciValue;