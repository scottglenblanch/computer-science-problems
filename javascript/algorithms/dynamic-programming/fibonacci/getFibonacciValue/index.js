const getBaseMemoizationStore = () => ({
	0: 0,
	1: 1
});

const isNeedToUpdateMemoizationStore = ({num, memoizationStore}) =>
	memoizationStore[num] === undefined;

const updateMemoizationStore = ({num, memoizationStore}) => {
	memoizationStore[num] = (
		getFibonacciValue({num: num - 1, memoizationStore}) +
		getFibonacciValue({num: num - 2, memoizationStore})
	);
};

const getFibonacciValue = ({num, memoizationStore = getBaseMemoizationStore()}) => {
	// side effect
	if(isNeedToUpdateMemoizationStore(({num, memoizationStore}))) {
		updateMemoizationStore({num, memoizationStore})
	}

	return memoizationStore[num];
};

module.exports = getFibonacciValue;